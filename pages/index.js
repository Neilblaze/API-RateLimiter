import { useState } from 'react'
import styles from '../pages/styles.module.css'

export default function Index() {
  const [response, setResponse] = useState()

  const makeRequest = async () => {
    const res = await fetch('/api/user')

    setResponse({
      status: res.status,
      body: await res.json(),
      limit: res.headers.get('X-RateLimit-Limit'),
      remaining: res.headers.get('X-RateLimit-Remaining'),
    })
  }

  return (
    <main className={styles.container}>
      <h1>GRPC API RateLimiter</h1>
      <p>
        This utilizes <code className={styles.inlineCode}>lru-cache</code>{' '}
        to implement rate limits for API routes on every RPC via Serverless
        Functions.
      </p>
      <button className={styles.container} onClick={() => makeRequest()}>Create Request</button>
      <code className={styles.code}>
        <div>
          <b>Status Code: </b>
          {response?.status || 'None'}
        </div>
        <div>
          <b>Request Limit: </b>
          {response?.limit || 'None'}
        </div>
        <div>
          <b>Remaining Requests: </b>
          {response?.remaining || 'None'}
        </div>
        <div>
          <b>Body: </b>
          {JSON.stringify(response?.body) || 'None'}
        </div>
      </code>
      <div className={styles.links}>
        <a href="https://github.com/Neilblaze/GRPC-API-RateLimiter">View Source</a>
        {' | '}
        <a href="https://nextjs.org/docs/deployment">Deploy You Own ▲</a>
      </div>
    </main>
  )
}
