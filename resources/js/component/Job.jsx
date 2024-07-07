// src/App.js
import React from "react";
// import illustration from "./path/to/your/illustration.png"; // Replace with your image path
import a3 from "../assets/images/a7.jpg";

const Job = () => {
    return (
        <div className="bg-teal-50 min-h-screen flex flex-col items-center">
            {/* <Header /> */}
            <MainSection />
        </div>
    );
};

// const Header = () => (
//     <header className="w-full bg-white py-4 shadow-md">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Chakri Bakri</h1>
//             <nav>
//                 <ul className="flex space-x-4">
//                     <li>
//                         <a
//                             href="#"
//                             className="text-gray-600 hover:text-gray-800"
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className="text-gray-600 hover:text-gray-800"
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             className="text-gray-600 hover:text-gray-800"
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </header>
// );

const MainSection = () => (
    <div className="container mx-auto px-4  py-20 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6">
            <h2 className="text-5xl font-bold mb-6">
                Find a Job With Your Interests and Abilities
            </h2>
            <p className="text-gray-800 mb-6">
                Are you ready to take the next step in your career? We are
                excited to announce a range of job opportunities available in
                our company! We are seeking talented, motivated, and passionate
                individuals to join our dynamic team and contribute to our
                ongoing success.
            </p>
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
            </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
            <img
                src={a3}
                alt="Illustration"
                className="w-3/4 lg:w-full h-4/6"
            />
        </div>
    </div>
);

export default Job;
