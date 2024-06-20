import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function UserShift({ shiftAssignments, shifts }) {
    const [shiftType, setShiftType] = useState("");
    const [shiftDate, setShiftDate] = useState("");

    const handleFilter = () => {
        Inertia.get(route("user-shifts"), { shiftType, shiftDate });
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">My Shifts</h1>
            <div className="flex space-x-4 mb-6">
                <div>
                    <label className="block text-gray-700">Shift Type</label>
                    <select
                        value={shiftType}
                        onChange={(e) => setShiftType(e.target.value)}
                        className="border p-2 w-full"
                    >
                        <option value="">All</option>
                        {shifts.map((shift) => (
                            <option key={shift.id} value={shift.name}>
                                {shift.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Shift Date</label>
                    <input
                        type="date"
                        value={shiftDate}
                        onChange={(e) => setShiftDate(e.target.value)}
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
    );
}
