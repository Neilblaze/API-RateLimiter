import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'

const limiter = rateLimit({
  interval: 15 * 1000, // 60 seconds
  uniqueTokenPerInterval: 100, // Max 100 users per second
})

export default async function handler(req, res) {
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
    res.status(200).json({ ID: uuid.v4() })
  } catch {
    res.status(429).json({ Error: 'Rate limit exceeded! 💀' })
  }
}
