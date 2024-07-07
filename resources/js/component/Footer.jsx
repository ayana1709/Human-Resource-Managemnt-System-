// src/Footer.js
import React from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800   text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <FooterColumn title="Platform">
                        <FooterLink href="#">Overview</FooterLink>
                        <FooterLink href="#">Features</FooterLink>
                        <FooterLink href="#">Integrations</FooterLink>
                        <FooterLink href="#">Mobile apps</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Solutions">
                        <FooterLink href="#">By training</FooterLink>
                        <FooterLink href="#">By industry</FooterLink>
                        <FooterLink href="#">TalentLibrary</FooterLink>
                        <FooterLink href="#">Course providers</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Learn">
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">eBooks</FooterLink>
                        <FooterLink href="#">Blended learning</FooterLink>
                        <FooterLink href="#">What is an LMS?</FooterLink>
                        <FooterLink href="#">Best LMS</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Company">
                        <FooterLink href="#">About us</FooterLink>
                        <FooterLink href="#">Our customers</FooterLink>
                        <FooterLink href="#">Affiliates</FooterLink>
                        <FooterLink href="#">Customer success</FooterLink>
                        <FooterLink href="#">Contact us</FooterLink>
                    </FooterColumn>
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <p className="text-gray-60 text-sm">
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
