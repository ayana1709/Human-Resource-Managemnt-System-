import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

export default function ShiftAssignment({ shiftAssignments, shifts, users }) {
    const [shiftType, setShiftType] = useState("");
    const [shiftDate, setShiftDate] = useState("");

    const handleFilter = () => {
        Inertia.get(route("shift-assignments.index"), { shiftType, shiftDate });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        Inertia.post(route("shift-assignments.store"), data);
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Shift Assignments</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                    <label className="block text-gray-700">Employee</label>
                    <select
                        name="user_id"
                        className="border p-2 w-full"
                        required
                    >
                        <option value="">Select Employee</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Shift</label>
                    <select
                        name="shift_id"
                        className="border p-2 w-full"
                        required
                    >
                        <option value="">Select Shift</option>
                        {shifts &&
                            shifts.map((shift) => (
                                <option key={shift.id} value={shift.id}>
                                    {shift.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Shift Date</label>
                    <input
                        type="date"
                        name="shift_date"
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Assign Shift
                </button>
            </form>
            <ul>
                {shiftAssignments.map((assignment) => (
                    <li key={assignment.id} className="border p-2 my-2">
                        {assignment.user.name} - {assignment.shift.name} on{" "}
                        {assignment.shift_date}
                    </li>
                ))}
            </ul>
            <h1 className="text-2xl font-bold mb-4">Shift Assignments</h1>
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
                        <th className="py-2">Employee</th>
                        <th className="py-2">Shift</th>
                        <th className="py-2">Shift Date</th>
                    </tr>
                </thead>
                <tbody>
                    {shiftAssignments.map((assignment) => (
                        <tr key={assignment.id}>
                            <td className="border px-4 py-2">
                                {assignment.user.name}
                            </td>
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
