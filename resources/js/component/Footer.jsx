// src/Footer.js
import React from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800   text-white py-2 pb-6">
            <div className="container mx-auto px-10">
                <div className="mt-8 flex justify-between items-center">
                    <p className="text-gray-60 text-xl">
                        &copy; 2024 HRMS Company. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <SocialIcon href="#" icon={<FaYoutube />} />
                        <SocialIcon href="#" icon={<FaTwitter />} />
                        <SocialIcon href="#" icon={<FaFacebook />} />
                        <SocialIcon href="#" icon={<FaLinkedin />} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, children }) => (
    <div className="w-full md:w-1/5 mb-8 md:mb-0">
        <h3 className="text-gray-80 font-semibold mb-4">{title}</h3>
        <ul>{children}</ul>
    </div>
);

const FooterLink = ({ href, children }) => (
    <li className="mb-2">
        <a
            href={href}
            className="text-gray-60 hover:text-gray-80 transition-colors duration-300"
        >
            {children}
        </a>
    </li>
);

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        className="text-gray-60 hover:text-gray-80 transition-colors duration-300 text-xl"
    >
        {icon}
    </a>
);

export default Footer;
