import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

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
        {
            title: "Training & Development",
            description:
                "Provide training programs to enhance employee skills.",
        },
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="min-h-screen bg-gray-100 flex flex-col items-center w-full">
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
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
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
                                                href="#contact"
                                                className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Contact
                                            </Link>
                                        </div>

                                        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
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
                                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                    >
                                                        Log in
                                                    </Link>

                                                    <Link
                                                        href={route("register")}
                                                        className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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

                    {/* Banner */}
                    <header
                        className="w-full dark:bg-gray-900 text-white py-12 text-center"
                        style={{ height: "90vh", margin: "4rem" }}
                    >
                        <h1 className="text-4xl font-bold">
                            Welcome to Our HRMS
                        </h1>
                        <p className="mt-4 text-xl">
                            Empowering Human Resources for a Brighter Future
                        </p>

                        <div className="min-h-60 dark:bg-gray-900 flex flex-col items-center w-80% p-6">
                            <h1 className="text-4xl font-bold text-white mb-8">
                                Uses of Human Resource Management
                            </h1>
                            <div className="flex overflow-x-none space-x-6">
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
                    </header>

                    {/* Vision */}
                    <section
                        id="vision"
                        className="w-full min-h-screen bg-white flex flex-col justify-center items-center text-center p-6"
                        style={{ height: "60vh" }}
                    >
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl">
                            To be the leading HRMS provider that revolutionizes
                            the way companies manage their human resources,
                            fostering a culture of excellence, innovation, and
                            inclusivity.
                        </p>
                    </section>

                    {/* Mission */}
                    <section
                        id="mission"
                        className="w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center text-center p-6"
                        style={{ height: "60vh" }}
                    >
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl">
                            To deliver cutting-edge HR solutions that streamline
                            processes, enhance employee engagement, and drive
                            organizational success. We are committed to
                            supporting our clients with top-notch services and
                            continuous innovation.
                        </p>
                    </section>

                    {/* Contact */}
                    <section
                        id="contact"
                        className="w-full min-h-screen bg-white flex flex-col justify-center items-center text-center p-6"
                        style={{ height: "60vh" }}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4">
                                Contact Us
                            </h2>
                            <p className="text-xl text-gray-700 mb-6">
                                For any inquiries or support, please reach out
                                to us:
                            </p>
                            <p className="text-xl text-gray-700">
                                <strong>Email:</strong> support@hrmscompany.com
                            </p>
                            <p className="text-xl text-gray-700">
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </p>
                            <p className="text-xl text-gray-700">
                                <strong>Address:</strong> 123 HRMS Street,
                                Business City, BC 12345
                            </p>
                            <blockquote className="mt-6 text-xl italic text-gray-700">
                                "Great vision without great people is
                                irrelevant." - Jim Collins
                            </blockquote>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="w-full bg-gray-800 text-white py-6 mt-12 text-center">
                        <p>&copy; 2024 HRMS Company. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Welcome;
