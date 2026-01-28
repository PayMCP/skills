# PayMCP cheatsheet (quick patterns)

## Defaults
- `mode` is optional. If omitted, PayMCP uses `AUTO`.
- You can configure one provider, or two providers (X402 + one traditional).
- Subscriptions require auth / a stable user identity.

## Providers
- **Traditional provider** (Walleot/Stripe/Adyen/Coinbase Commerce/PayPal/Square/Walleot/custom provider): require API key at minimum; may need additional settings.
- **X402 provider**: requires a blockchain address to receive USDC; only use if the MCP client supports x402.

## Pricing vs subscription
- Per-request: attach price metadata to a tool.
- Subscription gating: attach subscription plan metadata to a tool.

## TypeScript (pseudocode)
```ts
// Pseudocode: check docs for exact imports and constructors
const providers = [
  // one traditional provider (example)
  new WalleotProvider({ apiKey: process.env.WALLEOT_API_KEY }),
  // optional: add X402 provider if needed
  // new X402Provider({ payTo: [{ address: "0x..." }] }),
];

installPayMCP(mcp,{
  providers,
  // mode is optional; default is AUTO
  // mode: Mode.AUTO,
});
```

## Python (pseudocode)
```py
# Pseudocode: check docs for exact imports and constructors
providers = [
  WalleotProvider(api_key=os.environ["WALLEOT_API_KEY"]),
  # Optional: X402 provider when client supports x402
  # X402Provider(pay_to=[{"address": "0x..."}]),
]

paymcp = PayMCP(server, providers=providers)  # mode optional (AUTO by default)
```
