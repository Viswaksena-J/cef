# Nodemailer Email Setup Guide

## 📧 Email Configuration Setup

Your contact form is now configured to send emails using Nodemailer! Follow these steps to complete the setup:

### 1. Create Environment Variables File

Create a `.env.local` file in your project root with the following content:

```env
# Email Configuration for Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail Setup Instructions

#### Step 2.1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Follow the setup process to enable 2FA

#### Step 2.2: Generate App Password
1. In Google Account Settings, go to **Security**
2. Under **2-Step Verification**, click **App passwords**
3. Select **Mail** as the app
4. Select **Other** as the device and name it (e.g., "Website Contact Form")
5. Copy the 16-character app password generated

#### Step 2.3: Update Environment Variables
Replace the values in your `.env.local` file:
```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 3. Alternative Email Providers

If you prefer not to use Gmail, you can configure other providers:

#### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransporter({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
```

#### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
    host: 'your-smtp-server.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
```

### 4. Testing the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check the console logs for success/error messages
5. Check the recipient email (`viswaksene111@gmail.com`) for the message

### 5. Email Template Features

The email template includes:
- ✅ Professional HTML formatting
- ✅ All form fields displayed in a table
- ✅ Clickable email links
- ✅ Conditional fields (phone/location only show if provided)
- ✅ Timestamp of submission
- ✅ Plain text fallback for email clients that don't support HTML

### 6. Security Notes

- ⚠️ Never commit your `.env.local` file to version control
- ⚠️ Use App Passwords, not your regular Gmail password
- ⚠️ Consider using more secure email services for production (SendGrid, AWS SES)

### 7. Troubleshooting

**"Authentication failed" error:**
- Ensure 2FA is enabled on your Google account
- Use App Password, not regular password
- Check that EMAIL_USER and EMAIL_PASS are correctly set

**"Connection timeout" error:**
- Check your internet connection
- Verify Gmail service is accessible
- Try using port 465 with secure: true

**Environment variables not found:**
- Ensure `.env.local` is in the project root
- Restart your development server after creating/modifying `.env.local`
- Check for typos in variable names

### 8. Production Deployment

For production, make sure to:
1. Set environment variables in your hosting platform
2. Consider using more robust email services
3. Implement rate limiting to prevent spam
4. Add email logging and monitoring

---

Your contact form is now ready to send emails! 🎉 