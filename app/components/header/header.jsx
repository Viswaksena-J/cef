"use client"

import { useState } from "react";
import { 
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	
	return (
		<header className="sticky top-0 w-full bg-white z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
				<Link href="/" className="flex-shrink-0 flex items-center gap-2 md:gap-4">
					<Image 
						src="/chf-logo.png" 
						alt="CEF International"
						width={240}
						height={100}
						priority
						className="h-10 w-auto md:h-14"
					/>
					<div className="flex flex-col text-left">
						<p className="text-lg md:text-2xl font-bold text-[#1B5775]">CH FOUNDATION</p>
						<p className="text-xs md:text-sm text-[#648823]">CHILDREN'S HOPE FOUNDATION</p>
					</div>
				</Link>
				
				<NavigationMenu className="hidden md:block">
					<NavigationMenuList className="flex gap-4">
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href="/about-us" className="text-base font-medium text-gray-800 hover:text-blue-600">
									ABOUT US
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						
						<NavigationMenuItem>
                            <NavigationMenuLink asChild>
								<Link href="/our-work" className="text-base font-medium text-gray-800 hover:text-blue-600">
									OUR WORK
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href="/why-us" className="text-base font-medium text-gray-800 hover:text-blue-600">
									WHY US
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href="/contact-us" className="text-base font-medium text-gray-800 hover:text-blue-600">
									CONTACT US
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				
				<div className="hidden md:flex items-center">
					<Link 
						href="/donate" 
						className="rounded-full bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
					>
						DONATE NOW
					</Link>
				</div>
				
				{/* Mobile menu button */}
				<div className="md:hidden flex items-center">
					<button 
						className="p-2 focus:outline-none" 
						onClick={toggleMobileMenu}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>
			
			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
					<div className="flex flex-col h-full">
						<div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
							<Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
								<Image 
									src="/chf-logo.png" 
									alt="CEF International"
									width={240}
									height={100}
									className="h-10 w-auto"
								/>
								<div className="flex flex-col text-left">
									<p className="text-lg font-bold text-[#1B5775]">CH FOUNDATION</p>
									<p className="text-xs text-[#648823]">CHILDREN'S HOPE FOUNDATION</p>
								</div>
							</Link>
							<button 
								className="p-2 focus:outline-none" 
								onClick={toggleMobileMenu}
								aria-label="Close menu"
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						
						<nav className="flex-1 px-4 py-8">
							<ul className="space-y-12 text-center">
								<li>
									<Link 
										href="/about-us" 
										className="block text-2xl font-medium text-gray-800 hover:text-blue-600"
										onClick={() => setMobileMenuOpen(false)}
									>
										ABOUT US
									</Link>
								</li>
								<li>
									<Link 
										href="/our-work" 
										className="block text-2xl font-medium text-gray-800 hover:text-blue-600"
										onClick={() => setMobileMenuOpen(false)}
									>
										OUR WORK
									</Link>
								</li>
								<li>
									<Link 
										href="/why-us" 
										className="block text-2xl font-medium text-gray-800 hover:text-blue-600"
										onClick={() => setMobileMenuOpen(false)}
									>
										WHY US
									</Link>
								</li>
								<li>
									<Link 
										href="/contact-us" 
										className="block text-2xl font-medium text-gray-800 hover:text-blue-600"
										onClick={() => setMobileMenuOpen(false)}
									>
										CONTACT US
									</Link>
								</li>
							</ul>
						</nav>
						
						<div className="px-4 py-8 mt-auto">
							<Link 
								href="/donate" 
								className="block w-full text-center rounded-full bg-blue-600 px-6 py-4 text-xl text-white font-medium hover:bg-blue-700 transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								DONATE NOW
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

