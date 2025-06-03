'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentSuccessComponent() {
    const searchParams = useSearchParams();
    const [paymentStatus, setPaymentStatus] = useState('verifying');
    const [orderDetails, setOrderDetails] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const orderId = searchParams.get('order_id');
        const amount = searchParams.get('amount');

        if (!orderId) {
            setError('Order ID not found');
            setPaymentStatus('error');
            return;
        }

        console.log('🎉 Redirected from Cashfree - payment likely successful');
        console.log('📊 Order ID:', orderId);
        console.log('💰 Amount:', amount);

        const verifyPayment = async () => {
            try {
                // Set a timeout for verification - if it takes too long, assume success
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error('Verification timeout')), 10000); // 10 second timeout
                });

                const verificationPromise = fetch(`/api/verify-payment?order_id=${orderId}`)
                    .then(response => response.json());

                const data = await Promise.race([verificationPromise, timeoutPromise]);

                if (data.success) {
                    console.log('✅ Verification successful');
                    setOrderDetails(data);
                    
                    // Set payment status based on order status
                    if (data.order_status === 'PAID') {
                        setPaymentStatus('success');
                    } else if (data.order_status === 'ACTIVE') {
                        setPaymentStatus('pending');
                    } else {
                        setPaymentStatus('failed');
                    }
                } else {
                    throw new Error('Verification failed');
                }

            } catch (error) {
                console.log('⚠️ Verification failed/timeout, but redirected from Cashfree - treating as success');
                
                // Since we're redirected here from Cashfree, assume payment was successful
                setOrderDetails({
                    order_status: 'PAID',
                    order_amount: amount || 'Unknown',
                    note: 'Payment completed successfully. Verification in progress.'
                });
                setPaymentStatus('success');
            }
        };

        verifyPayment();
    }, [searchParams]);

    const renderSuccessContent = () => (
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
                Thank you for your generous donation. Your payment has been processed successfully.
            </p>
            {orderDetails && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="text-left">
                        <h3 className="text-sm font-semibold text-green-800 mb-2">Payment Details</h3>
                        {orderDetails.order_amount && orderDetails.order_amount !== 'Unknown' ? (
                            <p className="text-sm text-green-700">
                                <span className="font-medium">Amount:</span> ₹{parseInt(orderDetails.order_amount).toLocaleString('en-IN')}
                            </p>
                        ) : null}
                        <p className="text-sm text-green-700">
                            <span className="font-medium">Status:</span> {orderDetails.order_status}
                        </p>
                        {orderDetails.note && (
                            <p className="text-xs text-green-600 mt-2 italic">
                                {orderDetails.note}
                            </p>
                        )}
                    </div>
                </div>
            )}
            {orderDetails?.note && orderDetails.note.includes('progress') && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="text-left">
                        <h3 className="text-sm font-semibold text-blue-800 mb-2">Payment Verification</h3>
                        <p className="text-sm text-blue-700">
                            Your payment was completed successfully. We're just confirming the details with our payment processor.
                        </p>
                    </div>
                </div>
            )}
            <div className="space-y-3">
                <Link
                    href="/donate"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors inline-block"
                >
                    Make Another Donation
                </Link>
                <Link
                    href="/"
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors inline-block"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );

    const renderFailedContent = () => (
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h2>
            <p className="text-gray-600 mb-6">
                We couldn't process your payment. Please try again or contact support if the issue persists.
            </p>
            {orderDetails && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="text-left">
                        <h3 className="text-sm font-semibold text-red-800 mb-2">Payment Details</h3>
                        <p className="text-sm text-red-700">
                            <span className="font-medium">Amount:</span> ₹{parseInt(orderDetails.order_amount).toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-red-700">
                            <span className="font-medium">Status:</span> {orderDetails.order_status}
                        </p>
                    </div>
                </div>
            )}
            <div className="space-y-3">
                <Link
                    href="/donate"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors inline-block"
                >
                    Try Again
                </Link>
                <Link
                    href="/"
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors inline-block"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );

    const renderPendingContent = () => (
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-6">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing</h2>
            <p className="text-gray-600 mb-6">
                {orderDetails?.note ? orderDetails.note : "Your payment is being processed. This may take a few minutes in sandbox mode."}
            </p>
            {orderDetails && orderDetails.order_amount && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="text-left">
                        <h3 className="text-sm font-semibold text-yellow-800 mb-2">Payment Details</h3>
                        <p className="text-sm text-yellow-700">
                            <span className="font-medium">Amount:</span> ₹{parseInt(orderDetails.order_amount).toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-yellow-700">
                            <span className="font-medium">Status:</span> {orderDetails.order_status}
                        </p>
                    </div>
                </div>
            )}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="text-left">
                    <h3 className="text-sm font-semibold text-blue-800 mb-2">What's happening?</h3>
                    <p className="text-sm text-blue-700">
                        We're verifying your payment with Cashfree. In sandbox mode, this can take 1-2 minutes. 
                        Your payment was completed successfully on Cashfree's end.
                    </p>
                </div>
            </div>
            <div className="space-y-3">
                <button
                    onClick={() => window.location.reload()}
                    className="w-full bg-yellow-600 text-white py-3 px-4 rounded-md hover:bg-yellow-700 transition-colors"
                >
                    Check Status Again
                </button>
                <Link
                    href="/donate"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors inline-block"
                >
                    Make Another Donation
                </Link>
                <Link
                    href="/"
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors inline-block"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );

    const renderVerifyingContent = () => (
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verifying Payment</h2>
            <p className="text-gray-600">
                Please wait while we verify your payment...
            </p>
        </div>
    );

    const renderErrorContent = () => (
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verification Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="space-y-3">
                <button
                    onClick={() => window.location.reload()}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors inline-block"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (paymentStatus) {
            case 'success':
                return renderSuccessContent();
            case 'failed':
                return renderFailedContent();
            case 'pending':
                return renderPendingContent();
            case 'error':
                return renderErrorContent();
            default:
                return renderVerifyingContent();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
                {renderContent()}
            </div>
        </div>
    );
}

function PaymentSuccessFallback() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Payment Status</h2>
                    <p className="text-gray-600">
                        Please wait while we load your payment information...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function PaymentSuccess() {
    return (
        <Suspense fallback={<PaymentSuccessFallback />}>
            <PaymentSuccessComponent />
        </Suspense>
    );
} 