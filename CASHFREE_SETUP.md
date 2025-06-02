# Cashfree Payment Integration Setup Guide

This guide will help you set up Cashfree payment integration for your donation platform.

## Prerequisites

1. A Cashfree merchant account
2. API credentials from Cashfree dashboard

## Setup Steps

### 1. Get Cashfree Credentials

1. Sign up/Login to [Cashfree Dashboard](https://merchant.cashfree.com/)
2. Navigate to **Developers** → **API Keys**
3. Generate your **Client ID** and **Client Secret** for the appropriate environment:
   - **Sandbox** for testing
   - **Production** for live transactions

### 2. Configure Environment Variables

Create a `.env.local` file in your project root and add the following:

```bash
# Cashfree Payment Gateway Configuration
CASHFREE_CLIENT_ID=your_actual_client_id_here
CASHFREE_CLIENT_SECRET=your_actual_client_secret_here

# Base URL for your application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Important:** Replace the placeholder values with your actual Cashfree credentials.

### 3. Domain Whitelisting

1. In your Cashfree dashboard, go to **Settings** → **Webhooks & API**
2. Add your domain to the whitelist:
   - For development: `localhost:3000`
   - For production: your actual domain

### 4. Configure Webhook URLs (Optional)

For production use, configure webhook URLs in your Cashfree dashboard:
- Success URL: `https://yourdomain.com/payment/success`
- Failure URL: `https://yourdomain.com/payment/success`

## Environment Configuration

### Sandbox vs Production

The integration is currently set to **sandbox mode** for testing. To switch to production:

1. Update the environment in the following files:
   - `app/api/create-order/route.js`: Change `CFEnvironment.SANDBOX` to `CFEnvironment.PRODUCTION`
   - `app/api/verify-payment/route.js`: Change `CFEnvironment.SANDBOX` to `CFEnvironment.PRODUCTION`  
   - `app/payment/page.jsx`: Change `mode: "sandbox"` to `mode: "production"`

2. Use your production credentials in `.env.local`

## Testing

### Test Cards for Sandbox

Use these test card details in sandbox mode:

**Successful Payment:**
- Card Number: `4111111111111111`
- Expiry: Any future date
- CVV: Any 3 digits
- Name: Any name

**Failed Payment:**
- Card Number: `4012001037141112`
- Expiry: Any future date
- CVV: Any 3 digits
- Name: Any name

### Testing Flow

1. Go to `/donate`
2. Select an amount from the dropdown
3. Click "DONATE NOW" → redirected to `/checkout`
4. Fill in user details
5. Click "DONATE NOW" → redirected to `/payment`
6. Automatically redirected to Cashfree payment page
7. Complete payment using test cards
8. Redirected back to `/payment/success` with payment status

## Payment Flow

1. **Donate Page** (`/donate`): User selects amount
2. **Checkout Page** (`/checkout`): User enters personal details
3. **Payment Page** (`/payment`): Cashfree SDK loads and redirects to payment gateway
4. **Cashfree Hosted Page**: User completes payment
5. **Success Page** (`/payment/success`): Payment verification and status display

## API Endpoints

- `POST /api/create-order`: Creates a new payment order with Cashfree
- `GET /api/verify-payment`: Verifies payment status after completion

## Security Notes

1. Never expose your Client Secret in client-side code
2. Always verify payment status on your server before delivering services
3. Use HTTPS in production
4. Validate all user inputs before processing

## Troubleshooting

### Common Issues

1. **"Domain not whitelisted"**: Ensure your domain is added to Cashfree whitelist
2. **"Invalid credentials"**: Check your Client ID and Secret in `.env.local`
3. **Payment not redirecting**: Verify return URL configuration
4. **CORS errors**: Ensure proper domain whitelisting

### Development Tips

1. Use browser developer tools to check console logs
2. Monitor network requests for API call failures
3. Check Cashfree dashboard for transaction logs
4. Verify environment variables are loaded correctly

## Support

- [Cashfree Documentation](https://docs.cashfree.com/)
- [Cashfree Support](https://support.cashfree.com/)
- Check the console logs for detailed error messages 