import { usePage } from "@inertiajs/react";
import React from "react";
// import { usePage } from "@inertiajs/inertia-react";
// import DashboardLayout from '../../Layouts/DashboardLayout';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";

export default function Show({ auth }) {
    const { leave, flash } = usePage().props;

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <EmployeeSidebar />
                        <main className="flex-1 px-8 bg-gray-100">
                            <h1 className="text-2xl font-bold mb-4">
                                Leave Request
                            </h1>
                            {flash.success && (
                                <div className="mb-4 text-green-500">
                                    {flash.success}
                                </div>
                            )}
                            <div className="mb-4">
                                <p>
                                    <strong>Start Date:</strong>{" "}
                                    {leave.start_date}
                                </p>
                                <p>
                                    <strong>End Date:</strong> {leave.end_date}
                                </p>
                                <p>
                                    <strong>Reason:</strong> {leave.reason}
                                </p>
                                <p>
                                    <strong>Status:</strong> {leave.status}
                                </p>
                            </div>
                            {leave.status === "pending" && (
                                <p>
                                    Please wait until the admin approves your
                                    request.
                                </p>
                            )}
                            {leave.status === "approved" && (
                                <p>Your leave request has been approved.</p>
                            )}
                            {leave.status === "denied" && (
                                <p>Your leave request has been denied.</p>
                            )}
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
