// src/App.js
import React from "react";
import {
    FaBriefcase,
    FaChartBar,
    FaExclamationTriangle,
    FaLaptop,
    FaArrowRight,
} from "react-icons/fa";
import back from "../assets/images/a5.jpg";
import a3 from "../assets/images/a3.jpg";
import Features from "./Features";

const App = () => {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <Services />
            <Features />
            <SupportSection />
        </div>
    );
};

const Header = () => (
    <header className="text-center py-10">
        <h1 className="text-4xl font-bold">
            Our Full-Service HR <span className="text-red-500">Solution</span>{" "}
            Delivers
        </h1>
    </header>
);

const Services = () => (
    <div className="flex justify-center space-x-4 py-10">
        <ServiceCard
            title="Employee Benefits"
            color="bg-pink-500"
            icon={<FaBriefcase />}
        />
        <ServiceCard
            title="HR Admin and Payroll"
            color="bg-purple-500"
            icon={<FaChartBar />}
        />
        <ServiceCard
            title="Risk Management"
            color="bg-blue-500"
            icon={<FaExclamationTriangle />}
        />
        <ServiceCard
            title="HR Support and Technology"
            color="bg-orange-500"
            icon={<FaLaptop />}
        />
    </div>
);

const ServiceCard = ({ title, color, icon }) => (
    <div
        className={`${color} text-white p-6 rounded-lg shadow-lg flex flex-col items-center h-40`}
    >
        <div className="text-3xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
);

const SupportSection = () => (
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
            <h2 className="text-5xl font-bold ">
                Comprehensive HR Management{" "}
                <span className="text-red-500">Solutions</span> for Modern
                Businesses
            </h2>
            <p className="mt-4 text-gray-800 text-xl max-w-lg mx-auto lg:mx-0 px-8">
                Our Human Resource Management System (HRMS) is designed to
                revolutionize the way you handle your HR operations. With our
                all-in-one platform, you can streamline processes such as
                payroll management, attendance tracking, training and
                development, and performance evaluations.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-8 px-7">
                <Button text="Small Businesses" color="bg-orange-500" />
                <Button text="Midsize Businesses" color="bg-red-500" />
            </div>
        </div>
    </div>
);

const Button = ({ text, color }) => (
    <button
        className={`${color} text-white px-4 py-2 rounded-lg font-semibold`}
    >
        {text}
    </button>
);

export default App;
