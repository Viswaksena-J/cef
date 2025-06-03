import { NextResponse } from "next/server";
import { cashfree, CASHFREE_ENVIRONMENT } from "../../../lib/cashfree.js";

// Helper function to wait
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Retry function for fetching order
async function fetchOrderWithRetry(version, orderId, maxRetries = 5) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            console.log(`🔍 Attempt ${i + 1}/${maxRetries} to fetch order: ${orderId}`);
            const response = await cashfree.PGFetchOrder(version, orderId);
            console.log(`✅ Order found on attempt ${i + 1}`);
            return response;
        } catch (error) {
            const status = error.response?.status;
            const message = error.response?.data?.message || error.message;
            
            console.log(`❌ Attempt ${i + 1} failed - Status: ${status}, Message: ${message}`);
            
            // If it's a 404 (order not found) and we have retries left, wait and try again
            if (status === 404 && i < maxRetries - 1) {
                const waitTime = (i + 1) * 3000; // Increase wait time: 3s, 6s, 9s, 12s
                console.log(`⏳ Waiting ${waitTime/1000} seconds before retry...`);
                await wait(waitTime);
                continue;
            }
            
            // If it's not a 404 or we're out of retries, throw the error
            throw error;
        }
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const orderId = searchParams.get('order_id');

        console.log("🚀 Starting payment verification for order ID:", orderId);
        console.log("🔧 Environment:", CASHFREE_ENVIRONMENT);
        console.log("🔧 Using shared Cashfree configuration");

        if (!orderId) {
            console.error("❌ No order ID provided");
            return NextResponse.json(
                { success: false, error: "Order ID is required" },
                { status: 400 }
            );
        }

        // Log order ID format for debugging
        console.log("📋 Order ID format check:");
        console.log("  - Length:", orderId.length);
        console.log("  - Contains 'order_':", orderId.includes('order_'));
        console.log("  - Full ID:", orderId);

        // Fetch order details from Cashfree with retry logic
        const version = "2023-08-01";
        console.log("🔄 Starting order fetch with retry logic...");
        
        try {
            const response = await fetchOrderWithRetry(version, orderId);
            console.log("🎉 Order verification successful!");
            console.log("📊 Order data:", JSON.stringify(response.data, null, 2));

            return NextResponse.json({
                success: true,
                order_status: response.data.order_status,
                order_amount: response.data.order_amount,
                payment_methods: response.data.payments || []
            });
        } catch (error) {
            // Handle specific 404 case - order might still be processing
            if (error.response?.status === 404) {
                console.log("⚠️  Order not found after all retries - treating as pending");
                console.log("💡 This might indicate:");
                console.log("   - Order is still being processed by Cashfree");
                console.log("   - Environment mismatch (sandbox vs production)");
                console.log("   - Order ID format issue");
                
                return NextResponse.json({
                    success: true,
                    order_status: "ACTIVE",
                    order_amount: null,
                    payment_methods: [],
                    note: "Payment is being processed. Please check back in a few minutes.",
                    debug_info: {
                        order_id: orderId,
                        attempts_made: 5,
                        environment: "SANDBOX"
                    }
                });
            }
            throw error;
        }

    } catch (error) {
        console.error("💥 Critical error in payment verification:", error);
        console.error("📋 Error details:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        });
        
        return NextResponse.json(
            { 
                success: false, 
                error: "Failed to verify payment", 
                details: error.message,
                debug_info: {
                    error_type: error.response?.data?.type,
                    error_code: error.response?.data?.code
                }
            },
            { status: 500 }
        );
    }
} 