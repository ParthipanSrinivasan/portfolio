// app/skills/page.tsx (Simple List)
"use client";

export default function Skills() {
    return (
        <section className="bg-white py-16 md:py-18 lg:py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-sm md:text-xl lg:text-1xl font-normal text-gray-800 mb-4">
                        Technical {" "}<span className="text-blue-500"> Skills </span>
                    </h1>
                    <p className="text-gray-600 text-sm md:text-sm">
                        A modern technology stack I use to build scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    
                    {/* Frontend */}
                    <div className="border rounded-xl border-blue-200 p-4">
                        <h2 className="text-sm font-bold text-blue-800 inline-block">
                            Frontend Development
                        </h2>
                        <ul className="mt-4 space-y-2">
                            {["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind"].map((skill, index) => (
                                <li key={index} className="flex items-center space-x-2 text-gray-700 text-sm">
                                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="border rounded-xl border-purple-200 p-4">
                        <h2 className="text-sm font-bold text-purple-800 inline-block">
                            Backend Development
                        </h2>
                        <ul className="mt-4 space-y-2">
                            {["Python", "Node.js", "Express","Fast API","RESTful API"].map((skill, index) => (
                                <li key={index} className="flex items-center space-x-2 text-gray-700 text-sm">
                                    <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Database */}
                    <div className="border rounded-xl border-green-200 p-4">
                        <h2 className="text-sm font-bold text-green-500 inline-block">
                            Databases
                        </h2>
                        <ul className="mt-4 space-y-2">
                            {["MySQL", "PostgreSQL"].map((skill, index) => (
                                <li key={index} className="flex items-center space-x-2 text-gray-700">
                                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Security Auth */}
                    <div className="border rounded-xl border-amber-300 p-4">
                        <h2 className="text- font-bold text-amber-600  inline-block"> Security & Auth </h2>
                        <ul className="mt-4 space-y-2">
                            {["JWT","Oauth"].map((skill, index) => (
                                <li key={index} className="flex items-center space-x-2 text-gray-700 text-sm">
                                    <svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools & Platform */}
                    <div className="border rounded-xl border-rose-300 p-4">
                        <h2 className="text- font-bold text-rose-600  inline-block"> Tools & Platforms </h2>
                        <ul className="mt-4 space-y-2">
                            {["Git","GitHub","Hostinger","Godaddy"].map((skill, index) => (
                                <li key={index} className="flex items-center space-x-2 text-gray-700 text-sm">
                                    <svg className="h-4 w-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}