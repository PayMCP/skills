// Pseudocode example. Verify exact imports and APIs in the PayMCP docs.
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { installPayMCP } from 'paymcp';
import { WalleotProvider } from 'paymcp/providers';
import { z } from 'zod';

const mcp = new McpServer({name: "My AI Assistant"});

// Example providers (use one or two; if two, use X402 + one traditional provider)
const providers = [
  // Replace with the provider you choose 
   new WalleotProvider({ apiKey: process.env.WALLEOT_API_KEY }),
  // Optional: enable X402 if the client supports it
  // new X402Provider({ payTo: [{ address: "0x..." }] }),
];

installPayMCP(mcp, { providers });

// Register tools and pricing metadata per your MCP framework.
mcp.registerTool(
  "add_numbers",
  {
    description: "Add two numbers together",
    inputSchema: { a: z.number(), b: z.number() },
    _meta: { price: { amount: 1.00, currency: "USD" } },
  },
  async ({ a, b }, extra) => { // Make sure to accept `extra`, even if the tool doesn't use it
    return { content: [{ type: "text", text: String(a + b) }] };
  }
);
