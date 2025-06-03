import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
    try {
        const body = await request.text();
        const signature = request.headers.get('x-webhook-signature');
        
        console.log("Webhook received:", body);
        console.log("Signature:", signature);

        // Parse the webhook data
        const webhookData = JSON.parse(body);
        
        // Log the payment details
        console.log("Payment webhook data:", JSON.stringify(webhookData, null, 2));
        
        // Here you can process the payment based on the event type
        if (webhookData.type === 'PAYMENT_SUCCESS_WEBHOOK') {
            console.log("Payment successful for order:", webhookData.data.order.order_id);
            console.log("Payment amount:", webhookData.data.payment.payment_amount);
            console.log("Payment status:", webhookData.data.payment.payment_status);
            
            // TODO: Update your database or send confirmation emails here
        }
        
        return NextResponse.json({ status: "success" });
        
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json(
            { error: "Webhook processing failed" },
            { status: 500 }
        );
    }
} 