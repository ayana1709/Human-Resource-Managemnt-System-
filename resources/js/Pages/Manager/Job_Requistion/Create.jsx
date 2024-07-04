import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm } from "@inertiajs/react";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        department: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("job-requisitions.store"));
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <DepManagerSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="min-h-screen flex flex-col">
                                <Head title="Create Job Requisition" />
                                <div className="flex flex-1">
                                    <main className="flex-1 p-6 bg-gray-100">
                                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                                            <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                                                Create Job Requisition
                                            </h1>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700">
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={data.title}
                                                        onChange={(e) =>
                                                            setData(
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                    />
                                                    {errors.title && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.title}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        value={data.description}
                                                        onChange={(e) =>
                                                            setData(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                    />
                                                    {errors.description && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.description}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700">
                                                        Department
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={data.department}
                                                        onChange={(e) =>
                                                            setData(
                                                                "department",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                    />
                                                    {errors.department && (
                                                        <span className="text-red-500 text-sm">
                                                            {errors.department}
                                                        </span>
                                                    )}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
                                                >
                                                    Create
                                                </button>
                                            </form>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
