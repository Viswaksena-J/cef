import { Cashfree, CFEnvironment } from "cashfree-pg";
import { NextResponse } from "next/server";

// Initialize Cashfree
const cashfree = new Cashfree(
    CFEnvironment.SANDBOX, // Change to PRODUCTION when going live
    process.env.CASHFREE_CLIENT_ID || "TEST_CLIENT_ID",
    process.env.CASHFREE_CLIENT_SECRET || "TEST_CLIENT_SECRET"
);

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const orderId = searchParams.get('order_id');

        if (!orderId) {
            return NextResponse.json(
                { error: "Order ID is required" },
                { status: 400 }
            );
        }

        // Fetch order details from Cashfree
        const version = "2023-08-01";
        const response = await cashfree.PGFetchOrder(version, orderId);

        return NextResponse.json({
            success: true,
            order_status: response.data.order_status,
            order_amount: response.data.order_amount,
            payment_methods: response.data.payments || []
        });

    } catch (error) {
        console.error("Error verifying payment:", error);
        return NextResponse.json(
            { error: "Failed to verify payment", details: error.message },
            { status: 500 }
        );
    }
} 