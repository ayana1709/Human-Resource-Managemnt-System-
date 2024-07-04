import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

export default function UserShift({ shiftAssignments, shifts, auth }) {
    const [shiftType, setShiftType] = useState("");
    const [shiftDate, setShiftDate] = useState("");

    const handleFilter = () => {
        Inertia.get(route("user-shifts"), { shiftType, shiftDate });
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <DepManagerSidebar />
                        <main className="flex-1 px-4 bg-gray-100">
                            <>
                                <h1 className="text-2xl font-bold mb-4">
                                    My Shifts
                                </h1>
                                <div className="flex space-x-4 mb-6">
                                    <div>
                                        <label className="block text-gray-700">
                                            Shift Type
                                        </label>
                                        <select
                                            value={shiftType}
                                            onChange={(e) =>
                                                setShiftType(e.target.value)
                                            }
                                            className="border p-2 w-full"
                                        >
                                            <option value="">All</option>
                                            {shifts.map((shift) => (
                                                <option
                                                    key={shift.id}
                                                    value={shift.name}
                                                >
                                                    {shift.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">
                                            Shift Date
                                        </label>
                                        <input
                                            type="date"
                                            value={shiftDate}
                                            onChange={(e) =>
                                                setShiftDate(e.target.value)
                                            }
                                            className="border p-2 w-full"
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <button
                                            onClick={handleFilter}
                                            className="bg-blue-500 text-white p-2 rounded"
                                        >
                                            Filter
                                        </button>
                                    </div>
                                </div>
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2">Shift</th>
                                            <th className="py-2">Shift Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shiftAssignments.map((assignment) => (
                                            <tr key={assignment.id}>
                                                <td className="border px-4 py-2">
                                                    {assignment.shift.name}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {assignment.shift_date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
