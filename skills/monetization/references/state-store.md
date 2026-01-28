# StateStore

By default, PayMCP stores pending tool arguments in memory using a process-local Map. This is not durable and will not work across server restarts or multiple server instances (no horizontal scaling).

To enable durable and scalable state storage, you can provide a custom StateStore implementation. PayMCP includes a built-in RedisStateStore, which works with any Redis-compatible client.

Python (pseudocode):
```python
from redis.asyncio import from_url
from paymcp import PayMCP, RedisStateStore
from paymcp.providers import WalleotProvider

redis = await from_url("redis://localhost:6379")
PayMCP(
    mcp,
    providers=[WalleotProvider(api_key="...")],
    state_store=RedisStateStore(redis),
)
```

TypeScript (pseudocode):
```ts
import { createClient } from "redis";
import { installPayMCP, RedisStateStore, Mode } from "paymcp";

const redisClient = createClient({ url: "redis://localhost:6379" });
await redisClient.connect();

installPayMCP(server, {
  providers: { /* ... */ },
  mode: Mode.TWO_STEP,
  stateStore: new RedisStateStore(redisClient),
});
```
