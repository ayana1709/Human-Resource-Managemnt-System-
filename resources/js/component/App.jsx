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
import { InertiaLink } from "@inertiajs/inertia-react";

const App = () => {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <Services />
            <Features />
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

const Button = ({ text, color }) => (
    <button
        className={`${color} text-white px-4 py-2 rounded-lg font-semibold`}
    >
        {text}
    </button>
);

export default App;
