import React from "react";

import a3 from "../assets/images/a7.jpg";
import { InertiaLink } from "@inertiajs/inertia-react";

const Job = () => {
    return (
        <div className="bg-teal-50 min-h-screen flex flex-col items-center">
            {/* <Header /> */}
            <MainSection />
        </div>
    );
};

const MainSection = () => (
    <div className="container mx-auto px-4  py-20 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6">
            <h2 className="text-5xl font-bold mb-6">
                Find a Job With Your Interests and Abilities
            </h2>
            <p className="text-gray-800 text-xl mb-6">
                Are you ready to take the next step in your career? We are
                excited to announce a range of job opportunities available in
                our company! We are seeking talented, motivated, and passionate
                individuals to join our dynamic team and contribute to our
                ongoing success.
            </p>
            <InertiaLink
                href={"/job-postings-cards"}
                className="bg-teal-500 text-white px-3 py-2 rounded inline-block hover:bg-green-300 transition"
            >
                APPLY A job
            </InertiaLink>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center ">
            <img src={a3} alt="Illustration" className="w-3/4 lg:w-full " />
        </div>
    </div>
);

export default Job;
