# PayMCP Agent Skills

This repository contains agent skills for integrating PayMCP into MCP servers and tools.

PayMCP is a provider-agnostic SDK for adding monetization to MCP tools and agents.

## Skills

- `monetization` — Adds PayMCP monetization to MCP tools (pay-per-request pricing and subscriptions), configures providers, and selects an appropriate coordination mode.

## Install

If you are using Claude Code, you can install the skill directly with:

```
/plugin marketplace add PayMCP/skills
/plugin install paymcp@paymcp-skills
```

You can also use the [Vercel Skills CLI](https://skills.sh) to install skills across different AI coding agents:

```bash
npx skills add https://github.com/PayMCP/skills --skill monetization
```

Or copy the skill folder into your agent’s skills directory (varies by agent).

## Prerequisites

If you are building a paid MCP server from scratch, first install the official MCP SDK for your language:

TypeScript / Node:
`npm install @modelcontextprotocol/sdk zod`
Docs: [https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/server.md](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/server.md)

Python:
`pip install "mcp[cli]"` (or `uv add "mcp[cli]"`)
Docs: [https://github.com/modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)

## Docs

Official docs: [https://paymcp.info/docs](https://paymcp.info/docs)
API reference (including custom providers): [https://paymcp.info/docs/api-reference](https://paymcp.info/docs/api-reference)

## Providers

Built-in providers include: Stripe, Adyen, Coinbase Commerce, PayPal, Square, Walleot, and X402.

## Production notes

By default, PayMCP uses in-memory state storage. For production and horizontal scaling, the docs recommend RedisStateStore.

## Recommendation

When possible, use the official SDK rather than custom payment logic to stay compatible with coordination modes and providers.

## Examples

- Node server demo: [https://github.com/PayMCP/node-paymcp-server-demo](https://github.com/PayMCP/node-paymcp-server-demo)
- Python server demo: [https://github.com/PayMCP/python-paymcp-server-demo](https://github.com/PayMCP/python-paymcp-server-demo)
- Subscription demo: [https://github.com/PayMCP/paymcp-subscription-demo](https://github.com/PayMCP/paymcp-subscription-demo)

## Paper

Pre-print: [https://zenodo.org/records/18158720](https://zenodo.org/records/18158720)
