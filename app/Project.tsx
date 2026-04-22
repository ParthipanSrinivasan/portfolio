// app/projects/page.tsx (Fixed useEffect Dependencies)
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Projects() {
    const [startIndex, setStartIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            category: "Frontend / Full Stack",
            description: "Built a modern portfolio using React.js and Next.js with responsive design, dynamic project showcase, and optimized performance.",
            technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
            color: "from-yellow-500 to-orange-500",
            liveDemo: "https://your-portfolio-demo.com", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/portfolio" // Replace with actual URL
        },
        {
            id: 2,
            title: "Company Management System",
            category: "Full Stack Web App",
            description: "Built a full-stack system with Admin and User panels to manage employees and assign tasks using React.js, Express.js, and MySQL with REST APIs.",
            technologies: ["React.js", "Express.js", "MySQL", "REST API"],
            color: "from-teal-500 to-cyan-600",
            liveDemo: "https://your-cms-demo.com", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/rantronics" // Replace with actual URL
        },
        {
            id: 3,
            title: "Interview Management System",
            category: "Full Stack Web App",
            description: "Developed a full-stack web application to manage candidate details and streamline the interview process. The system includes separate Admin and User portals to efficiently handle recruitment workflows.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            color: "from-blue-500 to-blue-600",
            liveDemo: "http://careerhub.veniyas.com/", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/" // Replace with actual URL
        },
        {
            id: 4,
            title: "Home Maid Management System",
            category: "Full Stack Web App",
            description: "Built a web-based platform to manage maid services with Admin and User portals, enabling search, booking, and tracking of household workers efficiently.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            color: "from-green-500 to-green-600",
            liveDemo: "https://maid.brightangelgroup.com/", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/" // Replace with actual URL
        },
        {
            id: 5,
            title: "Crescereluna Website",
            category: "Frontend Web Development",
            description: "Built a responsive business website using HTML, CSS, JavaScript, and Bootstrap with modern UI and smooth user experience.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            color: "from-purple-500 to-purple-600",
            liveDemo: "http://crescereluna.com/", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/" // Replace with actual URL
        },
        {
            id: 6,
            title: "Veniyas Global Services Website",
            category: "Frontend Web Development",
            description: "Built a responsive business website using HTML, CSS, JavaScript, and Bootstrap to showcase services and enhance online presence.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            color: "from-cyan-500 to-cyan-600",
            liveDemo: "https://veniyas.com/", // Replace with actual URL
            github: "https://github.com/ParthipanSrinivasan/" // Replace with actual URL
        }
    ];

    // Define nextSlide with useCallback to prevent unnecessary re-renders
    const nextSlide = useCallback(() => {
        setStartIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    // Set up interval with pause functionality - FIXED DEPENDENCIES
    useEffect(() => {
        if (!isHovering) {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, 3000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovering, nextSlide]); // Removed projects.length, added nextSlide

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    // Handle button clicks with optional future implementation
    const handleLiveDemo = (url: string) => {
        if (url && url !== "#") {
            window.open(url, "_blank", "noopener noreferrer");
        } else {
            // Show coming soon message or toast notification
            alert("Live demo coming soon! 🚧");
        }
    };

    const handleGithub = (url: string) => {
        if (url && url !== "#") {
            window.open(url, "_blank", "noopener noreferrer");
        } else {
            // Show coming soon message or toast notification
            alert("GitHub repository coming soon! 🚧");
        }
    };

    return (
        <section id="project" className="bg-white py-18">
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

                {/* Carousel Container with Arrows */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                        aria-label="Previous projects"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                        aria-label="Next projects"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* 3 Card Grid - Continuously Rotating with Hover Pause */}
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {getVisibleProjects().map((project) => (
                            <div 
                                key={project.id} 
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
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
                                        <button 
                                            onClick={() => handleLiveDemo(project.liveDemo)}
                                            className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 w-auto"
                                        >
                                            Live Demo 🔗
                                        </button>
                                        <button 
                                            onClick={() => handleGithub(project.github)}
                                            className="px-3 py-1.5 text-xs border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 w-auto"
                                        >
                                            GitHub 📂
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setStartIndex(idx);
                                // Reset interval timer on manual navigation
                                if (intervalRef.current) {
                                    clearInterval(intervalRef.current);
                                    intervalRef.current = setInterval(() => {
                                        nextSlide();
                                    }, 3000);
                                }
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx >= startIndex && idx < startIndex + 3
                                    ? "w-6 bg-blue-600"
                                    : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
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