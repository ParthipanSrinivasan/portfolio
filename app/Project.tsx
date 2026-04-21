// app/projects/page.tsx (Simpler Version)
"use client";

import { useState, useEffect } from "react";

export default function Projects() {
    const [startIndex, setStartIndex] = useState(0);
    
    const projects = [
        { id: 1, title: "Real-time Chat App", category: "Realtime App", description: "WebSocket based messaging application with online status and real-time updates.", technologies: ["Next.js", "Socket.IO"], color: "from-blue-500 to-blue-600" },
        { id: 2, title: "E-Commerce Platform", category: "Full Stack App", description: "Modern e-commerce solution with cart management and payment integration.", technologies: ["Next.js", "Node.js"], color: "from-green-500 to-green-600" },
        { id: 3, title: "Task Management App", category: "Productivity App", description: "Kanban-style task board with drag-and-drop functionality.", technologies: ["React", "Node.js"], color: "from-purple-500 to-purple-600" },
        { id: 4, title: "Weather Dashboard", category: "API Integration", description: "Real-time weather app with forecasts and location-based services.", technologies: ["Next.js", "API"], color: "from-cyan-500 to-cyan-600" },
        { id: 5, title: "Portfolio Website", category: "Frontend App", description: "Personal portfolio with animations and responsive design.", technologies: ["Next.js", "Tailwind"], color: "from-orange-500 to-orange-600" },
        { id: 6, title: "Blog Platform", category: "CMS App", description: "Full-featured blog with markdown support and comments.", technologies: ["Next.js", "MDX"], color: "from-red-500 to-red-600" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <section className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-xl md:text-xl lg:text-xl font-normal text-gray-800 mb-4">
                        My {" "}<span className="text-blue-500"> Projects </span>
                    </h1>
                    <p className="text-gray-600 text-sm md:text-sm">
                        Real-world applications built using modern technologies.
                    </p>
                </div>

                {/* 3 Card Grid - Continuously Rotating */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getVisibleProjects().map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                                <div className="text-center text-white">
                                    <div className="text-lg font-bold">{project.title}</div>
                                    <div className="text-xs opacity-90">{project.category}</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 w-auto">
                                        Live Demo
                                    </button>

                                    <button className="px-2 py-1 text-xs border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 w-auto">
                                        GitHub
                                    </button>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon */}
                <div className="text-center mt-12 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm">
                        More projects coming soon ❤️
                    </p>
                </div>
            </div>
        </section>
    );
}