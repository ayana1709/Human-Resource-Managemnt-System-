// resources/js/Pages/Calendar/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

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
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-2xl mb-4">
                                        Create Clander
                                    </h2>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
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
                                                setData("start", e.target.value)
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
                                                setData("end", e.target.value)
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
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
