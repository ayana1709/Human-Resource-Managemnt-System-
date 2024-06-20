import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "@/Layouts/Layout";

export default function ShiftAssignments({ shiftAssignments, shifts, users }) {
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
                        {shifts.map((shift) => (
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
        </>
    );
}
