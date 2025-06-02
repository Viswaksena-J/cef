import { Suspense } from 'react';
import { Hero, PaymentForm } from './components/sections';

export default function Checkout() {
    return (
        <div>
            <Hero />
            <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <PaymentForm />
            </Suspense>
        </div>
    )
}