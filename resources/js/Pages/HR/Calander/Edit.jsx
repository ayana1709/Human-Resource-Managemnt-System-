// resources/js/Pages/Calendar/Edit.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Edit({ event, auth }) {
    const { data, setData, put, errors } = useForm({
        title: event.title,
        description: event.description,
        start: event.start,
        end: event.end,
        is_holiday: event.is_holiday,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("calendar-events.update", event.id));
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h2 className="text-xl mb-4">
                                    Admin Dashboard
                                </h2>
                                <>
                                    <h1 className="text-2xl font-bold mb-4">
                                        Edit Event
                                    </h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full"
                                            />
                                            {errors.title && (
                                                <span className="text-red-500">
                                                    {errors.title}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full"
                                            />
                                            {errors.description && (
                                                <span className="text-red-500">
                                                    {errors.description}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Start Date
                                            </label>
                                            <input
                                                type="datetime-local"
                                                name="start"
                                                value={data.start}
                                                onChange={(e) =>
                                                    setData(
                                                        "start",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full"
                                            />
                                            {errors.start && (
                                                <span className="text-red-500">
                                                    {errors.start}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                End Date
                                            </label>
                                            <input
                                                type="datetime-local"
                                                name="end"
                                                value={data.end}
                                                onChange={(e) =>
                                                    setData(
                                                        "end",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full"
                                            />
                                            {errors.end && (
                                                <span className="text-red-500">
                                                    {errors.end}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                <input
                                                    type="checkbox"
                                                    name="is_holiday"
                                                    checked={data.is_holiday}
                                                    onChange={(e) =>
                                                        setData(
                                                            "is_holiday",
                                                            e.target.checked
                                                        )
                                                    }
                                                    className="mr-2"
                                                />
                                                Holiday
                                            </label>
                                            {errors.is_holiday && (
                                                <span className="text-red-500">
                                                    {errors.is_holiday}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2"
                                        >
                                            Update
                                        </button>
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
