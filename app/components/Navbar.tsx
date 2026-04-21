"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <>
            <nav className="bg-white shadow-sm sticky top-0 z-50 px-2 py-3">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    
                    {/* Logo - Changed to "Thirumalai" */}
                    <h1 className="text-1xl md:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                        Parthipan
                    </h1>

                    {/* Desktop Menu - Added all 5 menu items */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/skills" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Skills
                        </Link>
                        <Link href="/projects" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Download CV Button - New addition */}
                    <div className="hidden md:block">
                        <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                            Download CV
                        </button>
                    </div>

                    {/* Mobile Menu Button - Improved icon */}
                    <button 
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - Added Skills and Download CV button */}
                {menuOpen && (
                    <div className="mt-4 flex flex-col space-y-3 md:hidden">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium py-2">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium py-2">
                            About
                        </Link>
                        <Link href="/skills" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium py-2">
                            Skills
                        </Link>
                        <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium py-2">
                            Projects
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium py-2">
                            Contact
                        </Link>
                        <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors w-full text-left">
                            Download CV
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}