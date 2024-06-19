import React from "react";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Pending from "./Pending";

export default function Users() {
    const { users, departments, pendingUserId } = usePage().props;
    const csrfToken = window.Laravel.csrfToken;

    return (
        <div className="container mx-auto">
            <Head title="Admin - Approve Users" />
            <h1 className="text-2xl font-bold my-8">Approve Users</h1>

            <div>
                {users.map((user) => (
                    <div key={user.id} className="my-4 p-4 border rounded">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <form method="POST" action="/admin/users/approve">
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
                                <option value="">Select Department</option>
                                {departments.map((dept) => (
                                    <option key={dept.id} value={dept.name}>
                                        {dept.name}
                                    </option>
                                ))}
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
            <Pending pendingUserId={pendingUserId} />
        </div>
    );
}
