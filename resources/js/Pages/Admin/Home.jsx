import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { usePage } from "@inertiajs/react";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Home = ({ auth }) => {
    const {
        userCount = 0,
        trainingCount = 0,
        recentTrainings = [],
        usersPerDay = [],
        departemnts = 0,
        shift = 0,
    } = usePage().props;

    // Prepare data for the chart
    const chartData = {
        labels: usersPerDay.map((data) => `Day ${data.day}`),
        datasets: [
            {
                label: "Users per Day",
                data: usersPerDay.map((data) => data.count),
                backgroundColor: "rgba(210, 119, 0, 0.818)",
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

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <AdminSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <div className="container mx-auto p-4">
                                    <h1 className="text-3xl font-bold mb-6">
                                        Dashboard
                                    </h1>

                                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Statistics
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                                <h3 className="text-xl font-semibold">
                                                    Total Users
                                                </h3>
                                                <p className="text-3xl">
                                                    {userCount}
                                                </p>
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
                                                <p className="text-3xl">
                                                    {shift}
                                                </p>
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

                                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                        <h2 className="text-xl font-semibold mb-4">
                                            Recent Trainings
                                        </h2>
                                        <ul>
                                            {recentTrainings.length > 0 ? (
                                                recentTrainings.map(
                                                    (training) => (
                                                        <li
                                                            key={training.id}
                                                            className="mb-2"
                                                        >
                                                            {training.title}
                                                        </li>
                                                    )
                                                )
                                            ) : (
                                                <p>
                                                    No recent trainings
                                                    available.
                                                </p>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            User Registrations
                                        </h2>
                                        {usersPerDay.length > 0 ? (
                                            <Bar
                                                data={chartData}
                                                options={chartOptions}
                                            />
                                        ) : (
                                            <p>
                                                No user registration data
                                                available.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Home;
