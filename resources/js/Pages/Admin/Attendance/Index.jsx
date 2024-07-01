import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Index({ auth, attendances }) {
    const [searchDate, setSearchDate] = useState("");

    const handleDateChange = (e) => {
        setSearchDate(e.target.value);
    };

    const filteredAttendances = attendances.filter((attendance) => {
        return searchDate ? attendance.date === searchDate : true;
    });

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <AdminSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h1 className="text-2xl font-bold mb-4">
                                    Attendance Records
                                </h1>
                                <div className="mb-4 flex flex-wrap gap-4">
                                    <input
                                        type="date"
                                        value={searchDate}
                                        onChange={handleDateChange}
                                        className="p-3 border rounded-md flex-grow md:flex-grow-0"
                                    />
                                </div>
                                <div className="overflow-x-auto">
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
                                            {filteredAttendances.map(
                                                (attendance) => (
                                                    <tr key={attendance.id}>
                                                        <td className="py-2 px-4 border">
                                                            {attendance.id}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {
                                                                attendance.user
                                                                    .name
                                                            }
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {attendance.date}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {
                                                                attendance.check_in
                                                            }
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {attendance.check_out ||
                                                                "N/A"}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
