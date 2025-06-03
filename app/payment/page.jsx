'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PaymentComponent() {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const sessionId = searchParams.get('session_id');
        const orderId = searchParams.get('order_id');

        if (!sessionId || !orderId) {
            setError('Invalid payment session. Please try again.');
            setIsLoading(false);
            return;
        }

        // Load Cashfree SDK
        const loadCashfreeSDK = () => {
            return new Promise((resolve, reject) => {
                // Check if SDK is already loaded
                if (window.Cashfree) {
                    resolve(window.Cashfree);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
                script.onload = () => {
                    if (window.Cashfree) {
                        resolve(window.Cashfree);
                    } else {
                        reject(new Error('Cashfree SDK not loaded'));
                    }
                };
                script.onerror = () => reject(new Error('Failed to load Cashfree SDK'));
                document.head.appendChild(script);
            });
        };

        const initializePayment = async () => {
            try {
                const CashfreeSDK = await loadCashfreeSDK();
                
                // Initialize Cashfree
                const cashfree = CashfreeSDK({
                    mode: "production" // Updated to production
                });

                // Open Cashfree checkout
                const checkoutOptions = {
                    paymentSessionId: sessionId,
                    redirectTarget: "_self"
                };

                // This will redirect to Cashfree hosted page
                cashfree.checkout(checkoutOptions);

            } catch (error) {
                console.error('Error initializing payment:', error);
                setError('Failed to initialize payment. Please try again.');
                setIsLoading(false);
            }
        };

        initializePayment();
    }, [searchParams]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Error</h3>
                        <p className="text-sm text-gray-500 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.href = '/donate'}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Go Back to Donate
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Redirecting to Payment</h3>
                    <p className="text-sm text-gray-500">
                        Please wait while we redirect you to the secure payment gateway...
                    </p>
                </div>
            </div>
        </div>
    );
}

function PaymentFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Loading Payment</h3>
                    <p className="text-sm text-gray-500">
                        Initializing payment gateway...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Payment() {
    return (
        <Suspense fallback={<PaymentFallback />}>
            <PaymentComponent />
        </Suspense>
    );
} 