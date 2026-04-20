"use client"
import Link from "next/link";
export default function Footer (){
    const currentYear = new Date().getFullYear();
    return (
        <>
<footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-8 md:pt-12 md:pb-5">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Parthipan
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Creating amazing web experiences with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-3 text-gray-600 text-sm">
                                <svg className="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>parthipanks2001@gmail.com</span>
                            </li>
                            {/* Phone */}
                            <li className="flex items-center space-x-3 text-gray-600 text-sm">
                                <svg className="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 94458 86295</span>
                            </li>
                            {/* Location */}
                            <li className="flex items-center space-x-3 text-gray-600 text-sm">
                                <svg className="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Bangalore, Karnataka</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wider">
                            Follow Me
                        </h3>
                        <div className="flex space-x-4">
                            <a 
                                href="https://github.com/ParthipanSrinivasan" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/parthipan-s-269447260/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Copyright */}
                <div className="border-t border-gray-200 mt-8 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} parthipan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
}