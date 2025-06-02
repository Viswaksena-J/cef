import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Hero, Location } from './components/sections';
import { ContactUsWrapper } from './components';

// Dynamically import MapView to prevent SSR issues with Leaflet
const MapView = dynamic(() => import('./components/sections').then(mod => ({ default: mod.MapView })), {
    ssr: false,
    loading: () => <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
});

export default function ContactUs() {
    return (
        <div>
            <Hero />
            <Location />
            <ContactUsWrapper />
            <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <MapView />
            </Suspense>
        </div>
    )
}