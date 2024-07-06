import React from "react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function Users({ auth }) {
    const { users, departments } = usePage().props;
    const csrfToken = window.Laravel.csrfToken;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <HrSidebar />

                    <main className="flex-1 bg-gray-100 p-4">
                        <div className="container mx-auto">
                            <h1 className="text-2xl font-bold my-8">
                                Approve Users
                            </h1>

                            <div className="space-y-4">
                                {users.map((user) => (
                                    <div
                                        key={user.id}
                                        className="p-4 border rounded-lg bg-white shadow-md"
                                    >
                                        <p className="font-semibold">
                                            Name:{" "}
                                            <span className="font-normal">
                                                {user.name}
                                            </span>
                                        </p>
                                        <p className="font-semibold">
                                            Email:{" "}
                                            <span className="font-normal">
                                                {user.email}
                                            </span>
                                        </p>
                                        <p className="font-semibold">
                                            Role:{" "}
                                            <span className="font-normal">
                                                {user.user_type}
                                            </span>
                                        </p>
                                        <form
                                            method="POST"
                                            action="/admin/users/approve"
                                            className="mt-2"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value={csrfToken}
                                            />
                                            <input
                                                type="hidden"
                                                name="user_id"
                                                value={user.id}
                                            />
                                            <select
                                                name="department_name"
                                                required
                                                className="form-select mt-1 block w-full border-gray-300 rounded-md"
                                            >
                                                <option value="">
                                                    Select Department
                                                </option>
                                                {departments.map((dept) => (
                                                    <option
                                                        key={dept.id}
                                                        value={dept.name}
                                                    >
                                                        {dept.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <button
                                                type="submit"
                                                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-150 w-full"
                                            >
                                                Approve
                                            </button>
                                        </form>
                                        <form
                                            method="POST"
                                            action="/admin/users/deny"
                                            className="mt-2"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value={csrfToken}
                                            />
                                            <input
                                                type="hidden"
                                                name="user_id"
                                                value={user.id}
                                            />
                                            <button
                                                type="submit"
                                                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-150 w-full"
                                            >
                                                Deny
                                            </button>
                                        </form>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
