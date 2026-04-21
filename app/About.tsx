"use client";

export default function About (){
    return(
        <>
        <section className="bg-white py-6 md:py-12">
            <div className="max-w-5xl mx-auto px-2 md:px-4 lg:px-6">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="md:text-xl lg:text-xl font-nnormal text-gray-800 mb-4">
                        About {" "} <span className="text-blue-500"> Me</span>
                    </h1>
                    <p className="text-gray-600 text-sm md:text-sm max-w-3xl mx-auto">
                        Passionate developer crafting digital experiences with clean code, 
                        modern technologies, and scalable architecture.
                    </p>
                </div>

                {/* Who I Am Section */}
                <div className="mb-16">
                    <h2 className="text-xl md:text-xl font-normal text-gray-800 mb-4">
                        Who {" "} <span className="text-blue-500">I' Am </span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="border border-sky-50 rounded-lg p-6">
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                I specialize in building modern web applications using <span className="font-semibold text-blue-500">React</span>,<span className="font-semibold text-purple-500"> Next.js </span>, <span className="font-semibold text-green-500"> Node.js </span>, and <span className="font-semibold text-pink-500"> Python </span> (FastAPI). I have hands-on experience developing CRM systems, web applications, and scalable platforms, along with maintaining and optimizing existing applications.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                My development approach focuses on <span className="font-semibold text-orange-500"> performance, maintainability </span>, and user experience. I enjoy solving complex problems, debugging challenging issues, and ensuring applications run smoothly and efficiently.
                            </p>
                        </div>

                        {/* Personal Info Card with Icons */}
                        <div className=" border border-sky-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Personal Info
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Name:</span>
                                    <span className="text-gray-700 text-sm"> Parthipan S</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Role:</span>
                                    <span className="text-gray-700 text-sm">Full Stack Developer</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Location:</span>
                                    <span className="text-gray-700 text-sm">Bangalore, Karantaka, India</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Email:</span>
                                    <span className="text-gray-700 text-sm">parthipanks2001@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Experience:</span>
                                    <span className="text-gray-700 text-sm">2+ Years</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-gray-500 text-sm w-24">Availability:</span>
                                    <span className="text-green-600 text-sm font-semibold">Open to full-time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I Do Section */}
                <div className="mb-16">
                    <h2 className="text-xl md:text-xl font-normal text-gray-800 mb-6">
                        What {" "}<span className="text-blue-500">I Do</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            "Frontend Development",
                            "Backend Development",
                            "Full-Stack Web Applications",
                            "CRM Development",
                            "Maintenance & Optimization",
                            "Debugging & Problem Solving",
                            "Deployment & Hosting",
                            "Database Management",
                            "API Integration"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 border border-fuchsia-100 rounded-lg hover:bg-fuchsia-100 transition-colors">
                                <svg className="h-5 w-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Goal Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                        <div className="text-center">
                            <h2 className="text-xl md:text-xl font-normal text-gray-800 mb-4">
                                Career {" "} <span className="text-blue-600"> Goal </span> 
                            </h2>
                            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                                My goal is to grow as a senior full-stack engineer, contribute to impactful products, 
                                and work with innovative teams to solve real-world problems through technology.
                            </p>
                        </div>
                </div>

                {/* Download CV Button */}
                <div className="text-center mt-12">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm text-sm">
                        Download CV
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}