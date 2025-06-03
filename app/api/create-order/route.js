import { Cashfree, CFEnvironment } from "cashfree-pg";
import { NextResponse } from "next/server";

// Debug: Log environment variables
console.log("CASHFREE_CLIENT_ID:", process.env.CASHFREE_CLIENT_ID ? "Set" : "Not set");
console.log("CASHFREE_CLIENT_SECRET:", process.env.CASHFREE_CLIENT_SECRET ? "Set" : "Not set");
console.log("CASHFREE_CLIENT_ID:", process.env.CASHFREE_CLIENT_ID);
console.log("CASHFREE_CLIENT_SECRET:", process.env.CASHFREE_CLIENT_SECRET ? "Set" : "Not set");

// Initialize Cashfree (use sandbox for testing, production for live)
const cashfree = new Cashfree(
    CFEnvironment.PRODUCTION, // Changed from SANDBOX to PRODUCTION
    process.env.CASHFREE_CLIENT_ID || "TEST_CLIENT_ID", // Add your client ID to .env.local
    process.env.CASHFREE_CLIENT_SECRET || "TEST_CLIENT_SECRET" // Add your client secret to .env.local
);

export async function POST(request) {
    try {
        const { amount, customerDetails } = await request.json();

        // Validate required fields
        if (!amount || !customerDetails) {
            return NextResponse.json(
                { error: "Amount and customer details are required" },
                { status: 400 }
            );
        }

        // Generate a unique order ID
        const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Prepare order request
        const orderRequest = {
            order_id: orderId,
            order_amount: parseFloat(amount),
            order_currency: "INR",
            customer_details: {
                customer_id: `customer_${Date.now()}`,
                customer_name: `${customerDetails.firstName} ${customerDetails.lastName}`,
                customer_email: customerDetails.email,
                customer_phone: customerDetails.phone,
            },
            order_meta: {
                return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'}/payment/success?order_id=${orderId}`,
            },
            order_note: "Donation payment",
        };

        console.log("Creating order with request:", JSON.stringify(orderRequest, null, 2));

        // Create order with Cashfree
        const response = await cashfree.PGCreateOrder(orderRequest);
        
        return NextResponse.json({
            success: true,
            order_id: orderId,
            payment_session_id: response.data.payment_session_id,
            order_token: response.data.order_token
        });

    } catch (error) {
        console.error("Error creating order:", error);
        
        // Log more detailed error information
        if (error.response) {
            console.error("Error response status:", error.response.status);
            console.error("Error response data:", error.response.data);
            console.error("Error response headers:", error.response.headers);
        }
        
        return NextResponse.json(
            { 
                error: "Failed to create order", 
                details: error.message,
                status: error.response?.status,
                cashfreeError: error.response?.data
            },
            { status: 500 }
        );
    }
} 