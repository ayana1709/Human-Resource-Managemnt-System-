import React from "react";
import { Inertia } from "@inertiajs/inertia";
// import Layout from "@/Layouts/Layout";

export default function EditShift({ shift }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        Inertia.post(route("shifts.update", shift.id), data, {
            method: "put",
        });
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Edit Shift</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Shift Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={shift.name}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Start Time</label>
                    <input
                        type="time"
                        name="start_time"
                        defaultValue={shift.start_time}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">End Time</label>
                    <input
                        type="time"
                        name="end_time"
                        defaultValue={shift.end_time}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Update Shift
                </button>
            </form>
        </>
    );
}
