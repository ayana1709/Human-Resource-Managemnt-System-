import React from "react";

import back from "../assets/images/a5.jpg";
import a3 from "../assets/images/a3.jpg";
import Features from "./Features";
import { InertiaLink } from "@inertiajs/inertia-react";

const SupportSection = () => {
    return (
        <div className="py-20 bg-gray-50 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-center lg:">
                <img
                    src={back}
                    alt="Support team"
                    className="w-3/4 lg:w-2/3 rounded-lg shadow-lg"
                />
                <img
                    src={a3}
                    alt="Meeting"
                    className="absolute bottom-0 right-0 w-1/4 lg:w-1/3 rounded-lg shadow-lg transform translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10"
                />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left lg:pl-10 mt-10 lg:mt-0">
                <h2 className="text-5xl font-bold pb-4">
                    Comprehensive HR Management{" "}
                    <span className="text-red-500">Solutions</span> for Modern
                    Businesses
                </h2>
                <p className="mt-4 text-gray-800 text-xl max-w-lg mx-auto lg:mx-0 px-8">
                    Our Human Resource Management System (HRMS) is designed to
                    revolutionize the way you handle your HR operations. With
                    our all-in-one platform, you can streamline processes such
                    as payroll management, attendance tracking, training and
                    development, and performance evaluations.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4 mt-8 px-7">
                    <InertiaLink
                        href={route("login")}
                        className="bg-orange-500 text-white px-3 py-2 rounded inline-block hover:bg-green-300 transition"
                    >
                        View More
                    </InertiaLink>
                </div>
            </div>
        </div>
    );
};
export default SupportSection;
