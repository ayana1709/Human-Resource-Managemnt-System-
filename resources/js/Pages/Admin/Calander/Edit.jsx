// resources/js/Pages/Calendar/Edit.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";

export default function Edit({ event }) {
    const { data, setData, put, errors } = useForm({
        title: event.title,
        description: event.description,
        start: event.start,
        end: event.end,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("calendar-events.update", event.id));
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    {errors.title && <span>{errors.title}</span>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && <span>{errors.description}</span>}
                </div>
                <div>
                    <label>Start Date</label>
                    <input
                        type="datetime-local"
                        value={data.start}
                        onChange={(e) => setData("start", e.target.value)}
                    />
                    {errors.start && <span>{errors.start}</span>}
                </div>
                <div>
                    <label>End Date</label>
                    <input
                        type="datetime-local"
                        value={data.end}
                        onChange={(e) => setData("end", e.target.value)}
                    />
                    {errors.end && <span>{errors.end}</span>}
                </div>
                <button type="submit">Update</button>
            </form>
        </>
    );
}
