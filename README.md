## RateLimits API Requests with 15s Timeout on every RPC

Utilizes `lru-cache` to implement rate limits for API routes on every RPC via ([Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)).


```powershell
curl http://localhost:3000/api/user -I
HTTP/1.1 200 OK
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 9

curl http://localhost:3000/api/user -I
HTTP/1.1 429 Rate limit exceeded! 💀
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 0
```

**Limit Ceiling : 500** | Client : [Test Here](https://grpc-ratelimit-api.vercel.app)
