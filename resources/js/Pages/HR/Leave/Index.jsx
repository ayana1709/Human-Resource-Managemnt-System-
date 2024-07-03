// resources/js/Pages/Leave/Index.jsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Inertia } from "@inertiajs/inertia";
import HrSidebar from "@/Components/Sidebar/HrSidebar";
// import { Head } from "@inertiajs/inertia-react";

export default function Index({ leaves, auth }) {
    const handleUpdate = (id, status) => {
        Inertia.patch(route("leave.update", id), { status });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="h-screen flex flex-col">
                {/* <Navbar /> */}
                <div className="flex flex-1">
                    <HrSidebar />

                    <main className="flex-1 bg-gray-100">
                        <div className="p-4">
                            <div>
                                {/* <Head title="Leave Requests" /> */}
                                <h1 className="text-2xl font-bold mb-4">
                                    Leave Requests
                                </h1>
                                <table className="min-w-full bg-white border">
                                    <thead className="bg-gray-400">
                                        <tr>
                                            <th className="py-2 px-4 border">
                                                ID
                                            </th>
                                            <th className="py-2 px-4 border">
                                                User
                                            </th>
                                            <th className="py-2 px-4 border">
                                                Start Date
                                            </th>
                                            <th className="py-2 px-4 border">
                                                End Date
                                            </th>
                                            <th className="py-2 px-4 border">
                                                Reason
                                            </th>
                                            <th className="py-2 px-4 border">
                                                Status
                                            </th>
                                            <th className="py-2 px-4 border">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leaves.map((leave) => (
                                            <tr key={leave.id}>
                                                <td className="py-2 px-4 border">
                                                    {leave.id}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    {leave.user.name}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    {leave.start_date}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    {leave.end_date}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    {leave.reason}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    {leave.status}
                                                </td>
                                                <td className="py-2 px-4 border">
                                                    <button
                                                        onClick={() =>
                                                            handleUpdate(
                                                                leave.id,
                                                                "approved"
                                                            )
                                                        }
                                                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdate(
                                                                leave.id,
                                                                "denied"
                                                            )
                                                        }
                                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                                    >
                                                        Deny
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
