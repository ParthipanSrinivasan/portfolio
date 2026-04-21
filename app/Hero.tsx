// app/components/Hero.tsx (with image)
"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import developerAnim from "../assets/Developer.json";

export default function Hero() {
    return (
        <section className="bg-white py-8 md:py-12 lg:pt-28">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div>
                        <p className="text-blue-400 text-sm md:text-base mb-3">
                            Hello, I'm
                        </p>
                        
                        <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            Parthipan S
                        </h1>
                        
                        <div className="mb-4">
                            <p className="text-sm sm:text-md text-gray-400">
                                Full Stack Developer
                            </p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-8">
                            I build modern, high-performance web applications using {" "}
                            <span className="font-semibold text-blue-500">React</span>,{" "}
                            <span className="font-semibold text-purple-500">Next.js</span>, {" "}
                            <span className="font-semibold text-green-500">Node.js</span>, and {" "} 
                            <span className="font-semibold text-pink-500">Python </span>
                             with FastAPI for backend services. As a  <span className="font-semibold text-orange-500"> full-stack developer</span>, 
                            I specialize in problem-solving and <span className="font-semibold text-red-500">debugging</span>, allowing me to identify 
                            and resolve complex technical issues effectively.
                        </p>
                        
                        <Link href="/projects">
                            <button className=" mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm text-xs">
                                View Projects
                            </button>
                        </Link>
                        {/* Stats */}
                        {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 scale-75 origin-left">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">2+</div>
                                <div className="text-gray-700 text-sm">Years Exp</div>
                            </div>

                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">15+</div>
                                <div className="text-gray-700 text-sm">Projects</div>
                            </div>

                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">10+</div>
                                <div className="text-gray-700 text-sm">Technologies</div>
                            </div>
                            </div>
                    </div>
                    
                    {/* Right Content - Image & Stats */}
                    <div className="flex justify-center items-center">
                        <Lottie
                        animationData={developerAnim}
                        loop
                        className="
                        w-[220px] h-[220px]
                        sm:w-[280px] sm:h-[280px]
                        lg:w-[350px] lg:h-[350px]
                    "
                        />
                    </div>
                            
                </div>
            </div>
        </section>
    );
}