// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="bg-white pb-16 md:pb-20 lg:pb-28 pt-10 md:pt-20 lg:pt-28">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 ">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-xl md:text-xl lg:text-xl font-normal text-gray-800 mb-4">
                        Contact {" "}<span className="text-blue-500 font-bold"> Parthipan </span> 
                    </h1>
                    <p className="text-gray-600 text-sm md:text-sm">
                        Let's build something great together
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left Side - Contact Information */}
                    <div className="border rounded-xl border-gray-200 p-6 md:p-6 lg:p-10">
                        <h2 className="text-xl font-normal text-gray-800 mb-6">
                            Contact {" "}<span className="text-purple-800"> Information </span>
                        </h2>
                        
                        <div className="">
                            {/* Phone */}
                            <div className="flex items-center space-x-4 p-4 rounded-lg transition-colors">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Phone</p>
                                    <p className="text-gray-800 text-sm font-medium">+91 9445886295</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4 p-4 rounded-lg transition-colors">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Email</p>
                                    <p className="text-gray-800 text-sm font-medium">parthipanks2001@gmail.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-4 p-4 rounded-lg transition-colors">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Location</p>
                                    <p className="text-gray-800 text-sm font-medium">Jaya Nagar East, Jayanagar, Bengaluru, Karnataka</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-gray-700 font-semibold text-sm mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/ParthipanSrinivasan" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                                    <svg className="h-5 w-5 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/parthipan-s-269447260/" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                                    <svg className="h-5 w-5 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a
                                    href="mailto:parthipanks2001@gmail.com"
                                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-600 hover:text-blue-600"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v.243l-9.75 5.85-9.75-5.85V6.75Zm0 2.994v7.506A2.25 2.25 0 0 0 4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V9.744l-9.193 5.516a1.5 1.5 0 0 1-1.614 0L2.25 9.744Z" />
                                    </svg>
                                    </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="border rounded-xl border-gray-200 p-10">
                        <h2 className="text-xl font-normal text-gray-800 mb-6">
                            Send {" "}<span className="text-amber-600"> Message </span>
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    placeholder="Enter subject"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm text-sm"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}