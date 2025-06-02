import * as React from "react";
import { 
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="sticky top-0 w-full bg-white z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
				<Link href="/" className="flex-shrink-0">
					<Image 
						src="/cef-international.webp" 
						alt="CEF International"
						width={240}
						height={50}
						priority
						className="h-12 w-auto"
					/>
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
				
				<div className="flex items-center">
					<Link 
						href="/donate" 
						className="rounded-full bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
					>
						DONATE NOW
					</Link>
				</div>
				
				{/* Mobile menu button - can be expanded with a mobile menu implementation */}
				<div className="md:hidden">
					<button className="p-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

