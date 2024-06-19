import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import Sidebar from "@/Components/Sidebar";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function UserListing({ auth, users }) {
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
                                    {/* <Head title="Users" /> */}
                                    <div className="container mx-auto p-4">
                                        <h1 className="text-2xl font-bold mb-4">
                                            User List
                                        </h1>
                                        <table className="min-w-full bg-white border">
                                            <thead>
                                                <tr>
                                                    <th className="py-2 px-4 border">
                                                        ID
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Name
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Email
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Role
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Created At
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user) => (
                                                    <tr key={user.id}>
                                                        <td className="py-2 px-4 border">
                                                            {user.id}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.name}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.email}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.user_type}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {new Date(
                                                                user.created_at
                                                            ).toLocaleDateString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
