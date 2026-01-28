# Custom providers

All payment providers should inherit from `BasePaymentProvider` and implement the required methods.

Python (pseudocode):
```python
from paymcp.providers import BasePaymentProvider

class MyProvider(BasePaymentProvider):
    def __init__(self, api_key: str, **kwargs):
        self.api_key = api_key
        super().__init__(**kwargs)

    def create_payment(self, amount: float, currency: str, description: str) -> tuple[str, str]:
        """Create a payment and return (payment_id, payment_url)."""
        return "payment_id", "https://myprovider.com/pay/payment_id"

    def get_payment_status(self, payment_id: str) -> str:
        """Return payment status: 'paid', 'pending', 'failed', or 'cancelled'."""
        return "paid"

    # Optional: subscriptions
    async def get_subscriptions(self, user_id: str, email: str | None = None) -> dict:
        return {
            "current_subscriptions": [],
            "available_subscriptions": [],
        }

    async def start_subscription(self, plan_id: str, user_id: str, email: str | None = None) -> dict:
        return {
            "message": "Subscription created",
            "sessionId": "SESSION_ID",
            "checkoutUrl": "https://example.com/checkout",
        }

    async def cancel_subscription(self, subscription_id: str, user_id: str, email: str | None = None) -> dict:
        return {
            "message": "Subscription cancellation scheduled",
            "canceled": True,
            "endDate": "2025-12-31T00:00:00Z",
        }
```

TypeScript (pseudocode):
```ts
import { BasePaymentProvider } from "paymcp/providers";

class MyProvider extends BasePaymentProvider {
  constructor(apiKey: string, options?: unknown) {
    super(options);
    this.apiKey = apiKey;
  }

  createPayment(amount: number, currency: string, description: string): [string, string] {
    // Create a payment and return [payment_id, payment_url]
    return ["payment_id", "https://myprovider.com/pay/payment_id"];
  }

  getPaymentStatus(paymentId: string): string {
    // Return payment status: 'paid', 'pending', 'failed', or 'cancelled'
    return "paid";
  }

  // Optional: subscriptions
  async getSubscriptions(userId: string, email?: string) {
    return {
      current_subscriptions: [],
      available_subscriptions: [],
    };
  }

  async startSubscription(planId: string, userId: string, email?: string) {
    return {
      message: "Subscription created",
      sessionId: "SESSION_ID",
      checkoutUrl: "https://example.com/checkout",
    };
  }

  async cancelSubscription(subscriptionId: string, userId: string, email?: string) {
    return {
      message: "Subscription cancellation scheduled",
      canceled: true,
      endDate: "2025-12-31T00:00:00Z",
    };
  }
}
```
