// resources/js/Pages/JobPostings/Index.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

export default function Index({ auth }) {
    const { postings } = usePage().props;

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
                                <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
                                    <h1 className="text-2xl font-bold mb-6">
                                        Job Postings
                                    </h1>
                                    <div className="mb-4">
                                        <Link
                                            href={route("job-postings.create")}
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                                        >
                                            Create New Job Posting
                                        </Link>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border">
                                            <thead>
                                                <tr className="w-full bg-gray-200">
                                                    <th className="px-4 py-2 border">
                                                        Title
                                                    </th>
                                                    <th className="px-4 py-2 border">
                                                        Description
                                                    </th>
                                                    <th className="px-4 py-2 border">
                                                        Roles
                                                    </th>
                                                    <th className="px-4 py-2 border">
                                                        Responsibilities
                                                    </th>
                                                    <th className="px-4 py-2 border">
                                                        Qualifications
                                                    </th>
                                                    <th className="px-4 py-2 border">
                                                        Skills
                                                    </th>
                                                    {/* <th className="px-4 py-2 border">
                                                        Actions
                                                    </th> */}
                                                    <th className="px-4 py-2 border">
                                                        Applications
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {postings.map((posting) => (
                                                    <tr
                                                        key={posting.id}
                                                        className="hover:bg-gray-100"
                                                    >
                                                        <td className="px-4 py-2 border">
                                                            <Link
                                                                href={route(
                                                                    "job-postings.show",
                                                                    posting.id
                                                                )}
                                                                className="text-blue-500 hover:underline"
                                                            >
                                                                {posting.title}
                                                            </Link>
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {
                                                                posting.description
                                                            }
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {posting.roles}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {
                                                                posting.responsibilities
                                                            }
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {
                                                                posting.qualifications
                                                            }
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {posting.skills}
                                                        </td>
                                                        {/* <td className="px-4 py-2 border text-center">
                                                            <Link
                                                                href={route(
                                                                    "job-postings.show",
                                                                    posting.id
                                                                )}
                                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                                                            >
                                                                View
                                                            </Link>
                                                        </td> */}
                                                        <td className="px-4 py-2 border text-center">
                                                            <Link
                                                                href={route(
                                                                    "job-postings.view-applications",
                                                                    posting.id
                                                                )}
                                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                                                            >
                                                                View
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
