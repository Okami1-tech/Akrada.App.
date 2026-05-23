// lib/paystack.ts
export class PaystackService {
  private secretKey: string
  private baseUrl = 'https://api.paystack.co'

  constructor() {
    this.secretKey = process.env.PAYSTACK_SECRET_KEY!
  }

  async initializeTransaction(data: {
    email: string
    amount: number
    reference: string
    callback_url?: string
  }) {
    const response = await fetch(`${this.baseUrl}/transaction/initialize`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  async verifyTransaction(reference: string) {
    const response = await fetch(`${this.baseUrl}/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
      },
    })
    return response.json()
  }
}

// App Router compatible webhook validation
export function validatePaystackWebhook(rawBody: string, signature: string): boolean {
  const crypto = require('crypto')
  const expectedSignature = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(rawBody)
    .digest('hex')
  return expectedSignature === signature
}