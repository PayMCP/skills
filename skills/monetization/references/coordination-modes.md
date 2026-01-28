# Coordination modes (PayMCP)

## Summary
- `mode` is optional. If omitted, PayMCP defaults to `AUTO`.
- `AUTO` is recommended unless the developer is certain the client supports a specific mode.

## Available modes
- AUTO
- RESUBMIT
- ELICITATION
- TWO_STEP
- X402
- PROGRESS
- DYNAMIC_TOOLS

Refer to official documentation for mode descriptions: https://paymcp.info/docs/concepts-and-flows

## Recommendations
- Default: `AUTO`.
- If the developer insists on a different mode, warn that it may reduce compatibility.
