import { Cashfree, CFEnvironment } from "cashfree-pg";

// Debug: Log environment variables
console.log("🔧 Cashfree Config - CLIENT_ID:", process.env.CASHFREE_CLIENT_ID ? "Set" : "Not set");
console.log("🔧 Cashfree Config - CLIENT_SECRET:", process.env.CASHFREE_CLIENT_SECRET ? "Set" : "Not set");
console.log("🔧 Environment: PRODUCTION");

if (process.env.CASHFREE_CLIENT_ID) {
    console.log("🔧 CLIENT_ID value:", process.env.CASHFREE_CLIENT_ID);
}

// Initialize Cashfree with PRODUCTION configuration
export const cashfree = new Cashfree(
    CFEnvironment.PRODUCTION,
    process.env.CASHFREE_CLIENT_ID,
    process.env.CASHFREE_CLIENT_SECRET
);

export const CASHFREE_ENVIRONMENT = CFEnvironment.PRODUCTION; 