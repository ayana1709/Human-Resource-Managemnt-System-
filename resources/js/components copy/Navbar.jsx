import { useState } from "react";
import { Link } from "react-router-dom";
const [toggleMenu, setToggleMenu] = useState(false);

import companyLogo from "../assets/images/logo.svg";

const Navbar = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <nav className="relative container mx-auto p-6">
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
                    <Link to="#" className="hover:text-darkGrayishBlue">
                        Careers
                    </Link>
                    <Link to="#" className="hover:text-darkGrayishBlue">
                        Community
                    </Link>
                </div>
                {/* Button */}
                <Link
                    to="#"
                    className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
                >
                    Get Started
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
    );
};

export default Navbar;
