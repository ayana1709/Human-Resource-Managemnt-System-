// import Navbar from "@/components copy/Navbar";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Testimonial from "@/component/Testimonial";
import CallToAction from "@/component/CallToAction";
import { useState } from "react";
import { Link } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
// import Footer from "@/components copy/Footer";

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
            <nav className="fixed container mx-auto p-2   text-white dark:bg-gray-800  top-0 z-4">
                {/* Flex Container */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <h1>HRMS</h1>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden space-x-6 md:flex">
                        <Link to="#" className="hover:text-darkGrayishBlue">
                            Pricing
                        </Link>
                        <Link to="#" className="hover:text-darkGrayishBlue">
                            Product
                        </Link>
                        <Link to="#" className="hover:text-darkGrayishBlue">
                            About Us
                        </Link>
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
                    {/* Button */}

                    <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end"></div>

                    {/* Hamburger Icon */}
                    <button
                        className={
                            toggleMenu
                                ? "open block hamburger md:hidden focus:outline-none"
                                : "block hamburger md:hidden focus:outline-none"
                        }
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div
                        className={
                            toggleMenu
                                ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                                : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                        }
                    >
                        <Link to="#">Pricing</Link>
                        <Link to="#">Product</Link>
                        <Link to="#">About Us</Link>
                        <Link to="#">Careers</Link>
                        <Link to="#">Community</Link>
                    </div>
                </div>
            </nav>

            <Hero />
            <Features />
            <Testimonial />
            <CallToAction />
            {/* h */}
            <div
                className="w-full dark:bg-gray-900 text-white py-16 text-center"
                style={{ height: "90vh", margin: "" }}
            >
                <h1 className="text-4xl font-bold">Welcome to Our HRMS</h1>
                <p className="mt-4 text-xl">
                    Empowering Human Resources for a Brighter Future
                </p>

                <div className="min-h-60 dark:bg-gray-900 flex flex-col items-center w-80% p-6">
                    <h1 className="text-4xl font-bold text-white mb-8">
                        Uses of Human Resource Management
                    </h1>
                    <div className="flex overflow-hidden space-x-6">
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
            <footer className="w-full bg-gray-800 text-white py-6 mt-12 text-center">
                <p>&copy; 2024 HRMS Company. All rights reserved.</p>
            </footer>
        </BrowserRouter>
    );
};

export default Welcome;
