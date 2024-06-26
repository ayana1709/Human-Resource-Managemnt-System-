import React from "react";
// import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Users({ auth }) {
    const { users, departments, pendingUserId } = usePage().props;
    const csrfToken = window.Laravel.csrfToken;

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

                                <div className="container mx-auto">
                                    {/* <Head title="Admin - Approve Users" /> */}
                                    <h1 className="text-2xl font-bold my-8">
                                        Approve Users
                                    </h1>

                                    <div>
                                        {users.map((user) => (
                                            <div
                                                key={user.id}
                                                className="my-4 p-4 border rounded"
                                            >
                                                <p>Name: {user.name}</p>
                                                <p>Email: {user.email}</p>
                                                <p>Role: {user.user_type}</p>
                                                <form
                                                    method="POST"
                                                    action="/admin/users/approve"
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
                                                        className="form-select mt-1 block w-full"
                                                    >
                                                        <option value="">
                                                            Select Department
                                                        </option>
                                                        {departments.map(
                                                            (dept) => (
                                                                <option
                                                                    key={
                                                                        dept.id
                                                                    }
                                                                    value={
                                                                        dept.name
                                                                    }
                                                                >
                                                                    {dept.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary mt-2"
                                                    >
                                                        Approve
                                                    </button>
                                                </form>
                                                <form
                                                    method="POST"
                                                    action="/admin/users/deny"
                                                    className="inline-block"
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
                                                        className="btn btn-danger mt-2"
                                                    >
                                                        Deny
                                                    </button>
                                                </form>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <Pending pendingUserId={pendingUserId} /> */}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
