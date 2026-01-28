# Pseudocode example. Verify exact imports and APIs in the PayMCP docs.

from mcp.server.fastmcp import FastMCP, Context
from paymcp import PayMCP, price
from paymcp.providers import WalleotProvider

mcp = FastMCP("AI agent name")

providers = [
    # Replace with the provider you choose 
    WalleotProvider(apiKey="sk_test_..."),
    # Optional: enable X402 if the client supports it
    # X402Provider(pay_to=[{"address": "0x..."}]),
]

PayMCP(mcp, providers=providers)

# Register tools and pricing metadata per your MCP framework.
@mcp.tool()
@price(amount=1.00, currency="USD")
def add_numbers(a: int, b: int, ctx: Context) -> int: # Make sure context is present even if not used in the tool
    """Add two numbers together"""
    return a + b
