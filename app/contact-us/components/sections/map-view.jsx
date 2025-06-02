import { MapViewWrapper } from './map-view-wrapper';

export const MapView = () => {
    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header - exact match to image */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wide">
                        We Are Also Available In
                    </h2>
                </div>

                {/* <MapViewWrapper /> */}
            </div>
        </div>
    );
};