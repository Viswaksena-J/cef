"use client"

import React from 'react';

 export const BottomBadges = () => {
  return (
    <div className="relative">
      <div className="w-full h-32 relative overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full animate-pulse"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ animationDuration: "4s" }}
        >
          <path
            d="M0,60 C300,90 600,30 900,70 C1050,85 1150,45 1200,65 L1200,120 L0,120 Z"
            fill="rgba(99, 102, 241, 0.1)"
            className="drop-shadow-sm"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDelay: "-2s",
          }}
        >
          <path
            d="M0,80 C200,45 500,95 800,55 C950,35 1100,75 1200,50 L1200,120 L0,120 Z"
            fill="rgba(139, 92, 246, 0.08)"
            className="drop-shadow-sm"
          />
        </svg>  
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            animation: "float 8s ease-in-out infinite reverse",
            animationDelay: "-1s",
          }}
        >
          <path
            d="M0,40 C400,75 700,15 1000,55 C1100,65 1150,35 1200,45 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.06)"
            className="drop-shadow-sm"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 512.000000 512.000000" 
                    className="fill-current text-gray-600"
                  >
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                      <path d="M1935 4691 c-73 -35 -115 -78 -149 -151 -73 -157 7 -348 171 -410 49 -18 78 -20 314 -20 l261 0 29 31 c39 42 39 87 0 131 l-29 33 -239 3 c-131 1 -249 5 -261 8 -41 9 -72 52 -72 100 0 34 6 48 31 73 l31 31 582 0 c639 0 642 0 757 -61 75 -40 121 -85 269 -265 152 -184 191 -225 258 -276 93 -69 262 -138 342 -138 14 0 35 -3 48 -6 l22 -6 0 -295 0 -295 -242 5 c-264 5 -304 11 -424 68 -34 16 -88 49 -118 73 -73 57 -596 561 -620 598 -48 74 36 170 118 133 17 -7 127 -102 245 -210 118 -108 222 -200 232 -205 61 -33 139 16 139 87 0 25 -8 47 -23 65 -12 15 -119 115 -237 223 -246 224 -281 247 -388 247 -237 2 -381 -259 -252 -454 36 -54 599 -596 683 -658 35 -25 99 -62 142 -82 150 -70 260 -88 551 -88 l211 0 27 -39 c33 -47 86 -85 141 -101 27 -8 127 -10 307 -8 l268 3 27 28 28 27 3 413 c3 368 1 415 -13 443 -37 69 -129 71 -168 4 -15 -25 -17 -69 -17 -374 l0 -346 -193 0 c-175 0 -196 2 -210 18 -15 17 -17 62 -17 435 l0 416 22 15 c15 11 45 16 90 16 60 0 71 3 99 28 56 50 36 138 -37 162 -49 16 -180 7 -225 -15 -43 -22 -96 -72 -116 -108 -14 -28 -17 -28 -66 -22 -85 11 -168 43 -240 92 -53 36 -102 87 -234 245 -91 110 -193 222 -227 249 -77 62 -180 113 -281 139 -74 19 -110 20 -684 20 l-606 0 -60 -29z"/>
                      <path d="M2146 3090 c-114 -20 -242 -108 -307 -209 -52 -81 -72 -160 -67 -271 3 -89 7 -104 42 -175 26 -53 56 -94 95 -131 94 -90 611 -492 639 -497 15 -3 39 0 54 6 15 7 166 122 335 257 332 265 365 299 406 420 25 74 26 207 3 278 -61 182 -204 301 -393 326 -109 14 -251 -28 -339 -99 -23 -19 -46 -35 -51 -35 -5 0 -20 11 -33 25 -75 80 -253 128 -384 105z m163 -206 c59 -17 123 -70 151 -123 28 -55 63 -83 103 -83 50 0 71 15 105 74 35 61 61 88 117 117 152 78 340 -14 375 -183 13 -66 -1 -139 -38 -195 -16 -24 -134 -124 -292 -250 -227 -181 -266 -208 -280 -197 -8 7 -114 91 -235 186 -121 95 -237 189 -259 209 -116 109 -114 292 5 394 72 62 154 79 248 51z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  Your kindness helps us make a difference in society, bringing hope and happiness to deserving children
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 64.000000 64.000000" 
                    className="fill-current text-gray-600"
                  >
                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
                      <path d="M0 365 l0 -185 198 0 198 0 30 -31 c16 -17 41 -37 55 -44 22 -12 29 -11 55 4 74 46 104 108 104 215 0 70 -1 74 -25 80 -24 6 -25 10 -25 76 l0 70 -295 0 -295 0 0 -185z m570 135 l0 -30 -275 0 -275 0 0 30 0 30 275 0 275 0 0 -30z m0 -65 c0 -16 -14 -18 -44 -6 -12 5 -44 0 -79 -11 -48 -15 -92 -18 -243 -18 l-184 0 0 25 0 25 275 0 c238 0 275 -2 275 -15z m48 -121 c3 -83 -23 -146 -77 -181 -32 -22 -34 -22 -63 -5 -17 9 -42 35 -57 56 -23 34 -26 50 -26 120 l0 80 55 16 c51 15 59 15 110 0 l55 -16 3 -70z m-248 36 c0 -30 -1 -30 -55 -30 -52 0 -55 -1 -55 -25 0 -24 3 -25 55 -25 30 0 55 -4 55 -10 0 -5 -18 -10 -40 -10 -22 0 -40 -4 -40 -10 0 -5 20 -10 44 -10 30 0 46 -5 50 -15 5 -13 -19 -15 -179 -15 l-185 0 0 90 0 90 175 0 175 0 0 -30z"/>
                      <path d="M449 331 c-17 -18 -29 -40 -29 -56 0 -35 50 -85 85 -85 32 0 85 50 85 80 0 81 -84 117 -141 61z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  We value your trust, ensuring that 100% of your donation is safe and securely reaches those in need.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 64.000000 64.000000" 
                    className="fill-current text-gray-600"
                  >
                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
                      <path d="M110 601 c0 -5 7 -11 15 -15 13 -5 15 -43 15 -260 0 -218 2 -257 16 -270 13 -13 45 -16 195 -16 161 0 208 7 164 24 -24 9 -17 35 10 42 98 24 98 194 0 218 -25 6 -25 6 -25 130 0 100 -3 128 -16 140 -13 13 -45 16 -195 16 -98 0 -179 -4 -179 -9z m368 -40 c2 -13 -2 -28 -10 -33 -10 -7 -10 -11 0 -15 8 -3 12 -32 12 -94 0 -86 -1 -89 -25 -95 -71 -18 -100 -123 -50 -182 14 -16 36 -33 49 -36 13 -3 26 -15 29 -26 5 -20 2 -20 -156 -18 l-162 3 -3 219 c-2 169 1 221 10 228 9 6 10 10 2 16 -6 4 -13 19 -16 35 l-5 27 161 -2 161 -3 3 -24z m71 -277 c26 -21 31 -33 31 -69 0 -36 -5 -48 -31 -69 -17 -15 -43 -26 -59 -26 -16 0 -42 11 -59 26 -26 21 -31 33 -31 69 0 36 5 48 31 69 17 15 43 26 59 26 16 0 42 -11 59 -26z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  Your donation not only changes lives but also offers a tax exemption under Section 80G of the Indian IT Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default BottomBadges;