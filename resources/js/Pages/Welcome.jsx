import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Testimonial from "@/component/Testimonial";
import CallToAction from "@/component/CallToAction";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "@/component/ContactUs";
import JobPostingsCards from "./HR/JobPosting/JobPostingCards";
import App from "@/component/App";
import Footer from "@/component/Footer";
import Job from "@/component/Job";
import SupportSection from "@/component/SupportSection";

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
                                        href="#home"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="#service"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Our Service
                                    </Link>
                                    <Link
                                        href="#solution"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Features
                                    </Link>

                                    <Link
                                        href="#jobs"
                                        className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Jobs
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
            <section id="home">
                {" "}
                <Hero />{" "}
            </section>
            <section id="service">
                <App />
            </section>
            <section id="solution">
                <SupportSection />
            </section>

            <section id="jobs">
                <Job />
            </section>
            <Footer />
            {/* <Testimonial /> */}
            {/* <JobPostingsCards /> */}
            {/* <ContactUs /> */}
        </BrowserRouter>
    );
};

export default Welcome;
