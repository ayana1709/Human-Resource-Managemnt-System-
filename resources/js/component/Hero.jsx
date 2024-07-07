import { Link } from "react-router-dom";

import back from "../assets/images/back.jpg";
import { InertiaLink } from "@inertiajs/inertia-react";

const Hero = () => {
    return (
        <section id="hero">
            {/* Flex Container */}
            <div className="container flex flex-col-reverse items-center px-16 py-20 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                {/* Left Item */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        The Easiest Way to Automate The HR Task.
                    </h1>
                    <p className="max-w-sm  text-gray-800 text-center text-xl text-darkGrayishBlue md:text-left">
                        Our HRMS transforms complexity into clarity, ensuring
                        seamless management of your most valuable asset.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <InertiaLink
                            href={route("register")}
                            className="bg-green-500 text-white px-3 py-2 rounded inline-block hover:bg-green-300 transition"
                        >
                            Get Started
                        </InertiaLink>
                    </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2 ">
                    <img src={back} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
