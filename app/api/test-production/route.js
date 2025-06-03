import { NextResponse } from "next/server";
import { cashfree, CASHFREE_ENVIRONMENT } from "../../../lib/cashfree.js";

export async function GET(request) {
    try {
        console.log("🧪 Testing production configuration...");
        console.log("🔧 Environment:", CASHFREE_ENVIRONMENT);
        console.log("🔧 Client ID:", process.env.CASHFREE_CLIENT_ID ? "Set" : "Not set");
        console.log("🔧 Client Secret:", process.env.CASHFREE_CLIENT_SECRET ? "Set" : "Not set");
        console.log("🔧 Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

        // Test API connectivity without creating an order
        return NextResponse.json({
            success: true,
            environment: CASHFREE_ENVIRONMENT === 2 ? "PRODUCTION" : "SANDBOX",
            client_id: process.env.CASHFREE_CLIENT_ID ? 
                `${process.env.CASHFREE_CLIENT_ID.substring(0, 6)}...` : "Not set",
            base_url: process.env.NEXT_PUBLIC_BASE_URL,
            message: "Production configuration loaded successfully"
        });

    } catch (error) {
        console.error("💥 Production test failed:", error);
        return NextResponse.json(
            { 
                success: false, 
                error: "Production configuration test failed",
                details: error.message
            },
            { status: 500 }
        );
    }
} 