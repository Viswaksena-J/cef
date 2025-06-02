'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const PaymentForm = () => {
    const searchParams = useSearchParams();
    const [amount, setAmount] = useState('');
    const [option, setOption] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    // Get amount and option from URL parameters
    useEffect(() => {
        const urlAmount = searchParams.get('amount');
        const urlOption = searchParams.get('option');
        
        if (urlAmount) {
            setAmount(urlAmount);
        }
        if (urlOption) {
            setOption(urlOption);
        }
    }, [searchParams]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone } = formData;
        
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
            alert('Please fill in all required fields');
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Basic phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        return true;
    };

    const handleDonateNow = async () => {
        if (!validateForm()) {
            return;
        }

        if (!amount) {
            alert('Amount not specified. Please go back to the donation page.');
            return;
        }

        setIsLoading(true);

        try {
            // Create order with Cashfree
            const response = await fetch('/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    customerDetails: formData
                })
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Failed to create order');
            }

            // Redirect to Cashfree payment page
            const paymentData = {
                paymentSessionId: data.payment_session_id,
                orderId: data.order_id
            };

            // Store payment data in sessionStorage for reference
            sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
            
            // Redirect to payment page
            window.location.href = `/payment?session_id=${data.payment_session_id}&order_id=${data.order_id}`;

        } catch (error) {
            console.error('Error creating order:', error);
            alert('Failed to process payment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex gap-8 p-6 bg-white">
            {/* Donation Detail Section */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg border">
                <h2 className="text-lg font-medium text-gray-800 mb-6">Donation Detail</h2>
                
                {/* Show selected amount */}
                {amount && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="text-sm font-medium text-blue-800 mb-2">Selected Donation Amount</h3>
                        <p className="text-2xl font-bold text-blue-600">₹{parseInt(amount).toLocaleString('en-IN')}</p>
                    </div>
                )}
                
                <div className="space-y-4">
                    {/* First Name and Last Name Row */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Cashfree Payments Section */}
            <div className="w-80 bg-gray-50 p-6 rounded-lg border">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-gray-700">Cashfree Payments</span>
                    <div className="flex items-center bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                        <span className="mr-1">Cashfree</span>
                        <span className="bg-white text-orange-500 px-1 rounded">Payments</span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                    Pay securely via Card/Net Banking/Wallet via Cashfree.
                </p>

                {amount && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                        <p className="text-sm text-green-700">Amount to pay:</p>
                        <p className="text-xl font-bold text-green-800">₹{parseInt(amount).toLocaleString('en-IN')}</p>
                    </div>
                )}

                <button 
                    onClick={handleDonateNow}
                    disabled={isLoading || !amount}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
                >
                    {isLoading ? 'Processing...' : 'DONATE NOW'}
                </button>

                {!amount && (
                    <p className="text-xs text-red-500 mt-2">
                        Please select an amount from the donation page first.
                    </p>
                )}
            </div>
        </div>
    )
}