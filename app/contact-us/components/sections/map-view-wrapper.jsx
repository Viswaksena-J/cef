'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const MapViewWrapper = () => {
    // City locations with their exact coordinates
    const cities = [
        { name: "AHMEDABAD", coordinates: [23.0225, 72.5714] },
        { name: "KOLKATA", coordinates: [22.5726, 88.3639] },
        { name: "BANGALORE", coordinates: [12.9716, 77.5946] },
        { name: "TELANGANA", coordinates: [17.1232, 79.0193] },
        { name: "CHENNAI", coordinates: [13.0827, 80.2707] },
        { name: "KERALA", coordinates: [10.8505, 76.2711] }
    ];

    // Custom blue marker icon
    const createCustomIcon = () => {
        return L.divIcon({
            className: 'custom-marker',
            html: `
                <div style="
                    width: 12px;
                    height: 12px;
                    background: #1e40af;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                "></div>
            `,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });
    };

    useEffect(() => {
        // Add custom CSS for the map styling
        const style = document.createElement('style');
        style.textContent = `
            .custom-map-container .leaflet-tile {
                filter: hue-rotate(200deg) saturate(1.5) brightness(0.8);
            }
            .custom-map-container .leaflet-container {
                background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%);
            }
            .custom-map-container .leaflet-popup-content-wrapper {
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .custom-map-container .leaflet-popup-content {
                margin: 12px 16px;
                font-family: system-ui, -apple-system, sans-serif;
                font-weight: 500;
                font-size: 14px;
                color: #1f2937;
                letter-spacing: 0.5px;
            }
            .custom-marker {
                background: transparent !important;
                border: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl custom-map-container">
            <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
                touchZoom={false}
                doubleClickZoom={false}
                boxZoom={false}
                keyboard={false}
                attribution=""
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution=""
                />
                
                {/* City Markers */}
                {cities.map((city) => (
                    <Marker
                        key={city.name}
                        position={city.coordinates}
                        icon={createCustomIcon()}
                    >
                        <Popup closeButton={false} autoPan={false}>
                            <div>{city.name}</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            
            {/* City Labels Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {cities.map((city, index) => {
                    // Position labels relative to their markers
                    const positions = {
                        "AHMEDABAD": { top: '25%', left: '25%' },
                        "KOLKATA": { top: '30%', left: '75%' },
                        "BANGALORE": { top: '70%', left: '35%' },
                        "TELANGANA": { top: '50%', left: '45%' },
                        "CHENNAI": { top: '80%', left: '50%' },
                        "KERALA": { top: '85%', left: '25%' }
                    };
                    
                    const position = positions[city.name] || { top: '50%', left: '50%' };
                    
                    return (
                        <div
                            key={city.name}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                                top: position.top,
                                left: position.left,
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#1f2937',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                letterSpacing: '0.5px',
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {city.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}; 