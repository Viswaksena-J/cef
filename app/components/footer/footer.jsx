import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image 
                src="/chf-logo.png" 
                alt="CEF International"
                width={240}
                height={100}
                priority
                className="h-14 w-auto"
              />
              <div className="flex flex-col text-left">
                <p className="text-2xl font-bold text-[#1B5775]">CH FOUNDATION</p>
                <p className="text-sm text-[#648823]">CHILDREN'S HOPE FOUNDATION</p>
              </div>
            </div>
            <div className="text-gray-300 text-base">
              A not-for-profit Section 8 Company.
              <br />
              <span className="font-bold">Registration No: U80302KA2021NPL146742.</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300 text-base font-medium">
              <li><a href="#" className="hover:text-white transition-colors">MY ACCOUNT</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WHY US</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CONTACT US</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BLOG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">REFUND POLICY</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contacts</h3>
            <div className="space-y-5 text-gray-300 text-base font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-400 flex-shrink-0" />
                <div>
                  103, 2nd Main Rd,
                  <br />
                  Isha Casablanca Mariyappa Layout,
                  <br />
                  Kadubeesanahalli, Panathur,
                  <br />
                  Bengaluru, Karnataka 560103
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+91 3241657780</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                <span>childrenshopefoundation0@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Open Hours</h3>
            <div className="space-y-3 text-gray-300 text-base font-medium">
              <div className="mb-4 font-semibold">We work all days a week</div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <span>Mon - Fri: 11:00 am - 8:00 pm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <span>Sat : 10:00 am - 6:00 pm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <span>Sun : 11:00 am - 6:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8 mb-8">
          <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-base">
            <div className="font-medium">
              © 2022 CEF International. All rights reserved. Designed By SSAMS
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}