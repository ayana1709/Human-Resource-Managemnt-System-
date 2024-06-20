// resources/js/Pages/Calendar/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Create({ auth }) {
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
                                    <h1 className="text-2xl font-bold mb-4">
                                        Create Event
                                    </h1>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.title && (
                                                <span>{errors.title}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Description</label>
                                            <textarea
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.description && (
                                                <span>
                                                    {errors.description}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Start Date</label>
                                            <input
                                                type="datetime-local"
                                                value={data.start}
                                                onChange={(e) =>
                                                    setData(
                                                        "start",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.start && (
                                                <span>{errors.start}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label>End Date</label>
                                            <input
                                                type="datetime-local"
                                                value={data.end}
                                                onChange={(e) =>
                                                    setData(
                                                        "end",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.end && (
                                                <span>{errors.end}</span>
                                            )}
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={data.is_holiday}
                                                    onChange={(e) =>
                                                        setData(
                                                            "is_holiday",
                                                            e.target.checked
                                                        )
                                                    }
                                                />
                                                Holiday
                                            </label>
                                        </div>
                                        <button type="submit">Create</button>
                                    </form>
                                </>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
