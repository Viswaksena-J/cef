import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, location, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Required fields missing' },
                { status: 400 }
            );
        }

        // Create transporter (fixed method name)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail app password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'viswaksene111@gmail.com',
            subject: `Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">
                                    Name:
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                                    ${name}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">
                                    Email:
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                                    <a href="mailto:${email}" style="color: #22c55e;">${email}</a>
                                </td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">
                                    Phone:
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                                    ${phone}
                                </td>
                            </tr>
                            ` : ''}
                            ${location ? `
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">
                                    Location:
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                                    ${location}
                                </td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">
                                    Subject:
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                                    ${subject}
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #22c55e;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                        <p>This email was sent from the contact form on your website.</p>
                        <p>Sent on: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
            text: `
                New Contact Form Submission
                
                Name: ${name}
                Email: ${email}
                ${phone ? `Phone: ${phone}` : ''}
                ${location ? `Location: ${location}` : ''}
                Subject: ${subject}
                
                Message:
                ${message}
                
                ---
                Sent on: ${new Date().toLocaleString()}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Contact form email sent successfully to viswaksene111@gmail.com');

        return NextResponse.json(
            { message: 'Form submitted successfully! Your message has been sent.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        
        // More specific error handling
        if (error.code === 'EAUTH') {
            return NextResponse.json(
                { error: 'Email authentication failed. Please contact administrator.' },
                { status: 500 }
            );
        }
        
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
} 