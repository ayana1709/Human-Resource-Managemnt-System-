import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = ({ auth }) => {
    const {
        userCount = 0,
        trainingCount = 0,
        recentTrainings = [],
        usersPerDay = [],
        departemnts = 0,
        shift = 0,
        jobs = [],
    } = usePage().props;

    const [payrollData, setPayrollData] = useState({
        totalBaseSalary: 0,
        totalBonus: 0,
        totalDeductions: 0,
        totalNetSalary: 0,
    });

    useEffect(() => {
        // Fetch payroll data from the server
        fetch("/reports")
            .then((response) => response.json())
            .then((data) => setPayrollData(data));
    }, []);

    // Prepare data for the bar chart
    const chartData = {
        labels: usersPerDay.map((data) => `Day ${data.day}`),
        datasets: [
            {
                label: "Users per Day",
                data: usersPerDay.map((data) => data.count),
                backgroundColor: "rgba(240, 157, 48, 0.818)",
                borderColor: "#000000",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "User Registrations Per Day",
            },
        },
    };

    // Prepare data for the pie chart
    const pieChartData = {
        labels: ["Base Salary", "Bonus", "Deductions", "Net Salary"],
        datasets: [
            {
                data: [
                    payrollData.totalBaseSalary,
                    payrollData.totalBonus,
                    payrollData.totalDeductions,
                    payrollData.totalNetSalary,
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100 p-4 grid grid-rows-2 grid-cols-2 gap-2 h-screen">
                            {/* 1statics */}
                            <div className="bg-white p-6 rounded-lg shadow-md mb-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold">
                                            Total Users
                                        </h3>
                                        <p className="text-3xl">{userCount}</p>
                                    </div>
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold">
                                            Total Departments
                                        </h3>
                                        <p className="text-3xl">
                                            {departemnts}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold">
                                            Shift
                                        </h3>
                                        <p className="text-3xl">{shift}</p>
                                    </div>
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold">
                                            Total Trainings
                                        </h3>
                                        <p className="text-3xl">
                                            {trainingCount}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2 recent trainings */}
                            <div className="bg-white p-6 rounded-lg shadow-md mb-2 grid grid-cols-2 gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">
                                        Recently posted Jobs
                                    </h2>
                                    <ul>
                                        {jobs.length > 0 ? (
                                            jobs.map((e) => (
                                                <li key={e.id} className="mb-2">
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        className="mr-4"
                                                    />
                                                    {e.title}
                                                </li>
                                            ))
                                        ) : (
                                            <p>
                                                No recent trainings available.
                                            </p>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">
                                        Recent Trainings
                                    </h2>
                                    <ul>
                                        {recentTrainings.length > 0 ? (
                                            recentTrainings.map((training) => (
                                                <li
                                                    key={training.id}
                                                    className="mb-2"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faThumbsUp}
                                                        className="mr-4"
                                                    />
                                                    {training.title}
                                                </li>
                                            ))
                                        ) : (
                                            <p>
                                                No recent trainings available.
                                            </p>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/*  4 pie chart */}
                            <div className=" bg-white p-6 pl-10 pr-10 rounded-lg shadow-md mb-6">
                                <Pie
                                    data={pieChartData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false, // Allows the chart to resize to fit its container
                                        aspectRatio: 1, // Controls the aspect ratio of the chart (width:height)

                                        plugins: {
                                            legend: {
                                                position: "right",

                                                labels: {
                                                    boxWidth: 20, // Adjust the width of the color box
                                                    padding: 12, // Padding between the legend items
                                                    font: {
                                                        size: 16, // Adjust the font size
                                                    },
                                                },
                                            },
                                            title: {
                                                display: true,
                                                align: "start",
                                                text: "Payroll Distribution",
                                                font: {
                                                    size: 22,
                                                    weight: "bold",
                                                },
                                                color: "#080808",
                                            },
                                        },
                                    }}
                                />
                            </div>

                            {/* 3 bar chart */}

                            <div className="f bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-xl font-semibold mb-0">
                                    User Registrations
                                </h2>
                                {usersPerDay.length > 0 ? (
                                    <Bar
                                        data={chartData}
                                        options={chartOptions}
                                    />
                                ) : (
                                    <p>No user registration data available.</p>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Dashboard;
