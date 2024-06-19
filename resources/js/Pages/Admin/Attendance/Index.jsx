// resources/js/Pages/Attendance/Index.jsx

import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Index({ auth, attendances }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <AdminSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h2 className="text-xl mb-4">
                                    Admin Dashboard
                                </h2>
                                <>
                                    {/* <Head title="Attendance" /> */}
                                    <h1 className="text-2xl font-bold mb-4">
                                        Attendance Records
                                    </h1>
                                    <table className="min-w-full bg-white border">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border">
                                                    ID
                                                </th>
                                                <th className="py-2 px-4 border">
                                                    User
                                                </th>
                                                <th className="py-2 px-4 border">
                                                    Date
                                                </th>
                                                <th className="py-2 px-4 border">
                                                    Check In
                                                </th>
                                                <th className="py-2 px-4 border">
                                                    Check Out
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attendances.map((attendance) => (
                                                <tr key={attendance.id}>
                                                    <td className="py-2 px-4 border">
                                                        {attendance.id}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {attendance.user.name}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {attendance.date}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {attendance.check_in}
                                                    </td>
                                                    <td className="py-2 px-4 border">
                                                        {attendance.check_out ||
                                                            "N/A"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
