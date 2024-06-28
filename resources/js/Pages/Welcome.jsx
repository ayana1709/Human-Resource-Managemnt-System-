import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Testimonial from "@/component/Testimonial";
import CallToAction from "@/component/CallToAction";

import { BrowserRouter } from "react-router-dom";
import ContactUs from "@/component/ContactUs";
import JobPostingsCards from "./Admin/JobPosting/JobPostingCards";

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [applicationData, setApplicationData] = useState({
        name: "",
        email: "",
        resume: null,
    });

    const handleApply = (job) => {
        setSelectedJob(job);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setApplicationData({
            ...applicationData,
            [name]: files ? files[0] : value,
        });
    };
    const hrmUses = [
        {
            title: "Recruitment",
            description:
                "Streamline your hiring process with efficient recruitment strategies.",
        },
        {
            title: "Employee Management",
            description:
                "Manage employee data and ensure effective communication.",
        },
        {
            title: "Payroll",
            description:
                "Automate payroll processes for timely and accurate payments.",
        },
    ];

    return (
        <BrowserRouter>
            {/*Nav Bar  */}

            {/* Navigation Bar */}
            <nav className="w-full bg-white dark:bg-gray-800 shadow fixed top-0 z-10">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:block sm:ml-6 ">
                                <div className="flex justify-center space-x-10">
                                    <Link
                                        href="#"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="#vision"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Vision
                                    </Link>
                                    <Link
                                        href="#mission"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Mission
                                    </Link>

                                    <Link
                                        href="/job-postings-cards"
                                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                                    >
                                        Job cards
                                    </Link>
                                </div>

                                <div className="sm:fixed sm:top-0 sm:right-0 p-6 pr-20 text-end">
                                    {auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            >
                                                Log in
                                            </Link>

                                            <Link
                                                href={route("register")}
                                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/*  */}
            <Hero />
            <Features />
            {/*  */}
            <div
                className="w-full white:bg-gray-900 text-dark py-16 text-center"
                style={{ height: "90vh", margin: "" }}
            >
                <h1 className="text-4xl font-bold">Our Service</h1>
                <p className="mt-4 text-xl"></p>

                <div className="min-h-60 white:bg-gray-900 flex flex-col items-center w-80% p-6">
                    <h1 className="text-4xl font-bold text-dark mb-8">
                        Uses of Human Resource Management
                    </h1>
                    <div className="bg-dark-800 flex overflow-hidden space-x-6 px-4 ">
                        {hrmUses.map((use, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    minWidth: "300px",
                                    minHeight: "350px",
                                }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {use.title}
                                </h2>
                                <p className="text-gray-700">
                                    {use.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Testimonial />
            {/* <JobPostingsCards /> */}
            {/* <ContactUs /> */}

            <footer className="w-full bg-gray-800 text-white py-6 mt-12 text-center">
                <p>&copy; 2024 HRMS Company. All rights reserved.</p>
            </footer>
        </BrowserRouter>
    );
};

export default Welcome;
