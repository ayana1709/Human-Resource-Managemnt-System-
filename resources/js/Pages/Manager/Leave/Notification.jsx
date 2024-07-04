// resources/js/Pages/Dashboard.jsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { usePage } from "@inertiajs/react";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";

// import DashboardLayout from "../Layouts/DashboardLayout";

export default function Notification({ auth }) {
    const { notifications } = usePage().props;

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <EmployeeSidebar />
                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h2 className="text-xl mb-4">
                                    Employee Dashboard
                                </h2>
                                <>
                                    <h1 className="text-2xl font-bold mb-4">
                                        Dashboard
                                    </h1>
                                    {notifications.length > 0 && (
                                        <div className="mb-4">
                                            <h2 className="text-xl font-bold mb-2">
                                                Notifications
                                            </h2>
                                            <ul>
                                                {notifications.map(
                                                    (notification, index) => (
                                                        <li
                                                            key={index}
                                                            className="mb-2"
                                                        >
                                                            {notification.data
                                                                .status ===
                                                                "approved" && (
                                                                <div className="text-green-500">
                                                                    Your leave
                                                                    request has
                                                                    been
                                                                    approved.
                                                                    <a
                                                                        href={`/leave/${notification.data.leave_id}`}
                                                                        className="text-blue-500 ml-2"
                                                                    >
                                                                        View
                                                                    </a>
                                                                </div>
                                                            )}
                                                            {notification.data
                                                                .status ===
                                                                "denied" && (
                                                                <div className="text-red-500">
                                                                    Your leave
                                                                    request has
                                                                    been denied.
                                                                    <a
                                                                        href={`/leave/${notification.data.leave_id}`}
                                                                        className="text-blue-500 ml-2"
                                                                    >
                                                                        View
                                                                    </a>
                                                                </div>
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
