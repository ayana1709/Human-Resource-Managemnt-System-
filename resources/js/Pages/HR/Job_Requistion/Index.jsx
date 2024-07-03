// resources/js/Pages/JobRequisitions/Index.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function Index({ auth }) {
    const { requisitions } = usePage().props;

    const handleApprove = (id) => {
        Inertia.post(route("job-requisitions.approve", id));
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
                                    <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                                        Job Requisitions
                                    </h1>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                                            <thead className="bg-gray-200">
                                                <tr>
                                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                                        Title
                                                    </th>
                                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                                        Description
                                                    </th>
                                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                                        Department
                                                    </th>
                                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                                        Status
                                                    </th>
                                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {requisitions.map((req) => (
                                                    <tr
                                                        key={req.id}
                                                        className="border-b hover:bg-gray-100"
                                                    >
                                                        <td className="py-4 px-6 text-sm text-gray-800">
                                                            {req.title}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-800">
                                                            {req.description}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-800">
                                                            {req.department}
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-800">
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-xs ${
                                                                    req.status ===
                                                                    "pending"
                                                                        ? "bg-yellow-200 text-yellow-800"
                                                                        : "bg-green-200 text-green-800"
                                                                }`}
                                                            >
                                                                {req.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 px-6 text-sm text-gray-800">
                                                            {req.status ===
                                                                "pending" && (
                                                                <button
                                                                    onClick={() =>
                                                                        handleApprove(
                                                                            req.id
                                                                        )
                                                                    }
                                                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                                                                >
                                                                    Approve
                                                                </button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
// import { usePage } from "@inertiajs/react";
// import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const Home = ({ auth }) => {
//     const {
//         userCount = 20,
//         trainingCount = 20,
//         recentTrainings = [23],
//         usersPerMonth = [33],
//     } = usePage().props;

//     // Prepare data for the chart
//     const chartData = {
//         labels: usersPerMonth.map((data) => `Month ${data.month}`),
//         datasets: [
//             {
//                 label: "Users per Month",
//                 data: usersPerMonth.map((data) => data.count),
//                 backgroundColor: "rgba(75, 192, 192, 0.2)",
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const chartOptions = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//             },
//             title: {
//                 display: true,
//                 text: "User Registrations Per Month",
//             },
//         },
//     };

//     return (
//         <>
//             <AuthenticatedLayout user={auth.user}>
//                 <Head title="Dashboard" />

//                 <div className="h-screen flex flex-col">
//                     {/* <Navbar /> */}
//                     <div className="flex flex-1">
//                         <AdminSidebar />

//                         <main className="flex-1 bg-gray-100">
//                             <div className="p-4">

//                             </div>
//                         </main>
//                     </div>
//                 </div>
//             </AuthenticatedLayout>
//         </>
//     );
// };

// export default Home;
