// resources/js/Pages/Calendar/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function CalendarCreate() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        start: "",
        end: "",
        is_holiday: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("calendar-events.store"));
    };

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Create Event</h1>
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
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={data.is_holiday}
                            onChange={(e) =>
                                setData("is_holiday", e.target.checked)
                            }
                        />
                        Holiday
                    </label>
                </div>
                <button type="submit">Create</button>
            </form>
        </DashboardLayout>
    );
}
