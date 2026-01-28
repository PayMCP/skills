# Troubleshooting

## Common issues
- **Payment required responses loop**: verify provider API keys and webhook/callback configuration.
- **X402 payments not detected**: verify x402 client support and the USDC receive address.
- **Tool prices not enforced**: confirm the tool metadata/decorator is applied to the correct tool.
- **Mode mismatch**: reset to `AUTO` unless you are certain the client supports a specific mode.
- **Subscriptions not recognized**: ensure the MCP server has auth and passes a stable user identity to PayMCP.
