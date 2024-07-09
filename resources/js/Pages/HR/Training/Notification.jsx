import { usePage } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

const Notification = ({ auth }) => {
    const { notifications } = usePage().props;

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="container mx-auto p-4">
                                Training
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    {notifications.length > 0 ? (
                                        <ul>
                                            {notifications.map(
                                                (notification) => (
                                                    <li
                                                        key={notification.id}
                                                        className="mb-2"
                                                    >
                                                        <a
                                                            href={`/trainings/${notification.data.training_id}`}
                                                            className="text-blue-500 hover:underline"
                                                        >
                                                            {
                                                                notification
                                                                    .data
                                                                    .training_title
                                                            }
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p>No notifications available.</p>
                                    )}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Notification;
