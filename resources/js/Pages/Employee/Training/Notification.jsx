// resources/js/Pages/Dashboard.jsx

import { usePage } from "@inertiajs/react";
import React from "react";

const Notification = () => {
    const { notifications } = usePage().props;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                {notifications.length > 0 ? (
                    <ul>
                        {notifications.map((notification) => (
                            <li key={notification.id} className="mb-2">
                                <a
                                    href={`/trainings/${notification.data.training_id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    {notification.data.training_title}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No notifications available.</p>
                )}
            </div>
        </div>
    );
};

export default Notification;
