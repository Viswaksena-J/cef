'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const DonateTodayWrapper = ({ children, imageUrl }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const router = useRouter();

    const donationOptions = [
        { value: '', label: 'CHOOSE AN OPTION', amount: '' },
        { value: 'meal400', label: 'RS. 68500/- FULL DAY MEAL FOR 400 CHILDREN', amount: '68500' },
        { value: 'orphan1year', label: 'RS. 78000/- ORPHAN CHILD FULL CARE 1 YEAR', amount: '78000' },
        { value: 'nutrition1child', label: 'RS. 2850/- NUTRITION FOOD FOR 1 ORPHAN CHILD', amount: '2850' },
        { value: 'feedchild1month', label: 'RS. 2975/- FEED A CHILD FOR A MONTH', amount: '2975' },
        { value: 'education1girl1year', label: 'RS. 9950/- EDUCATION 1 GIRL CHILD 1 YEAR', amount: '9950' },
        { value: 'feedfamily2week', label: 'RS. 2550/- FEED A FAMILY FOR 2 WEEK', amount: '2550' },
        { value: 'feedfamily2month', label: 'RS. 7950/- FEED A FAMILY FOR 2 MONTH', amount: '7950' },
        { value: 'education1girl6months', label: 'RS. 6900/- EDUCATION 1 GIRL CHILD FOR 6 MONTHS', amount: '6900' },
        { value: 'education2girl1year', label: 'RS. 19900/- EDUCATION 2 GIRL CHILD FOR 1 YEAR', amount: '19900' },
        { value: 'feedfamily1month', label: 'RS. 5950/- FEED A FAMILY FOR A MONTH', amount: '5950' },
        { value: 'abandoned1year', label: 'RS. 72000/- ABANDONED CHILD FULL CARE 1 YEAR', amount: '72000' },
        { value: 'hygiene6people', label: 'RS. 1850/- HYGENIE KIT FOR 6 PEOPLE', amount: '1850' },
        { value: 'feed3street1month', label: 'RS. 9905/- FEED 3 STREET CHILDREN FOR A MONTH', amount: '9905' },
        { value: 'infantgirl1year', label: 'RS. 46800/- INFANT GIRL CHILD SUPPORT 1 YEAR', amount: '46800' },
        { value: 'feed10aged1year', label: 'RS. 2.95 LAKHS/- FEED 10 OLD AGED PEOPLE FOR 1 YEAR', amount: '295000' },
        { value: 'feed10aged1month', label: 'RS. 29500/- FEED 10 OLD AGED PEOPLE FOR 1 MONTH', amount: '29500' },
        { value: 'custom', label: 'CUSTOM AMOUNT', amount: 'custom' }
    ];

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        const option = donationOptions.find(opt => opt.value === selectedValue);
        setSelectedOption(selectedValue);
        setSelectedAmount(option ? option.amount : '');
        if (selectedValue !== 'custom') {
            setCustomAmount('');
        }
    };

    const handleClear = () => {
        setSelectedOption('');
        setSelectedAmount('');
        setCustomAmount('');
    };

    const handleDonateClick = () => {
        const finalAmount = selectedAmount === 'custom' ? customAmount : selectedAmount;
        
        if (!finalAmount || finalAmount <= 0) {
            alert('Please select an amount or enter a custom amount');
            return;
        }

        // Navigate to checkout with amount parameter
        router.push(`/checkout?amount=${finalAmount}&option=${selectedOption}`);
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Donate Today</h1>
                <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>

            {/* Main Content Section */}
            <div className="flex rounded-lg overflow-hidden shadow-lg">
                {/* Left Image Section */}
                <div className="flex-1">
                    <img 
                        src={imageUrl || "/larm-rmah-AEaTUnvneik-unsplash-1200x755-1.webp"} 
                        alt="Happy children together" 
                        className="w-full h-full object-cover"
                        style={{ minHeight: '400px' }}
                    />
                </div>

                {/* Right Donation Form Section */}
                <div className="flex-1 bg-blue-700 flex flex-col justify-center items-center p-12 text-white">
                    <h2 className="text-2xl font-bold mb-8 tracking-wide">CHOOSE AMOUNT</h2>
                    
                    <div className="w-full max-w-sm mb-6">
                        <select 
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="w-full px-4 py-3 text-gray-700 bg-white border-0 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        >
                            {donationOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Clear Button and Amount Display */}
                    {selectedAmount && selectedAmount !== 'custom' && (
                        <div className="w-full max-w-sm mb-6">
                            <div className="flex justify-center mb-3">
                                <button 
                                    onClick={handleClear}
                                    className="text-white text-sm underline hover:no-underline"
                                >
                                    CLEAR
                                </button>
                            </div>
                            <div className="border-2 border-white rounded px-6 py-3 text-center">
                                <span className="text-xl font-bold">₹{parseInt(selectedAmount).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    )}

                    {/* Custom Amount Input */}
                    {selectedAmount === 'custom' && (
                        <div className="w-full max-w-sm mb-6">
                            <div className="flex justify-center mb-3">
                                <button 
                                    onClick={handleClear}
                                    className="text-white text-sm underline hover:no-underline"
                                >
                                    CLEAR
                                </button>
                            </div>
                            <input 
                                type="number" 
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                placeholder="Enter amount"
                                className="w-full px-4 py-3 text-gray-700 bg-white border-0 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                min="1"
                            />
                            {customAmount && (
                                <div className="border-2 border-white rounded px-6 py-3 text-center mt-3">
                                    <span className="text-xl font-bold">₹{parseInt(customAmount).toLocaleString('en-IN')}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <button 
                        onClick={handleDonateClick}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded transition-colors duration-200 text-lg tracking-wide disabled:bg-gray-500 disabled:cursor-not-allowed"
                        disabled={!selectedAmount && !customAmount}
                    >
                        DONATE NOW
                    </button>
                </div>
            </div>
        </div>
    );
};
