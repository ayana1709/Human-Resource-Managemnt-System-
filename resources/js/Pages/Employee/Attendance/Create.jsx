// resources/js/Pages/Attendance/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/Components/Sidebar";
import SidebarEmployee from "@/Components/SidebarEmployee";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        date: "",
        check_in: "",
        check_out: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("attendance.store"));
    };
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <SidebarEmployee />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <>
                                    <h1 className="text-2xl font-bold mb-4">
                                        Record Attendance
                                    </h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block mb-2">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                value={data.date}
                                                onChange={(e) =>
                                                    setData(
                                                        "date",
                                                        e.target.value
                                                    )
                                                }
                                                className="border p-2 w-full"
                                            />
                                            {errors.date && (
                                                <div className="text-red-500 mt-1">
                                                    {errors.date}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2">
                                                Check In
                                            </label>
                                            <input
                                                type="time"
                                                value={data.check_in}
                                                onChange={(e) =>
                                                    setData(
                                                        "check_in",
                                                        e.target.value
                                                    )
                                                }
                                                className="border p-2 w-full"
                                            />
                                            {errors.check_in && (
                                                <div className="text-red-500 mt-1">
                                                    {errors.check_in}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2">
                                                Check Out
                                            </label>
                                            <input
                                                type="time"
                                                value={data.check_out}
                                                onChange={(e) =>
                                                    setData(
                                                        "check_out",
                                                        e.target.value
                                                    )
                                                }
                                                className="border p-2 w-full"
                                            />
                                            {errors.check_out && (
                                                <div className="text-red-500 mt-1">
                                                    {errors.check_out}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Submit
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
