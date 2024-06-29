// resources/js/Components/EmployeeSidebar.jsx

import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { usePage } from "@inertiajs/react";

const EmployeeSidebar = () => {
    const { notifications = [] } = usePage().props; // Provide a default empty array if notifications are undefined

    // Calculate unread notifications count
    const unreadNotificationsCount = notifications.filter(
        (notification) => !notification.read_at
    ).length;

    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <ul>
                <Link href="/dashboard">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </li>
                </Link>
                <Link href="/attendance/create">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Attendance
                    </li>
                </Link>
                <Link href="/leave/create">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Leave Request
                    </li>
                </Link>
                <Link href="/calendarevents">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Calendar
                    </li>
                </Link>
                <Link href="/user-shifts">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        View Shift
                    </li>
                </Link>
                <Link href="/employee/payroll">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Payroll
                    </li>
                </Link>
                <Link href="/messages">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Messages
                    </li>
                </Link>
                <Link href="/notification">
                    <li className="flex items-center p-2 hover:bg-gray-700 relative">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Notification
                        {unreadNotificationsCount > 0 && (
                            <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-2 text-xs absolute top-0 right-0">
                                {unreadNotificationsCount}
                            </span>
                        )}
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default EmployeeSidebar;
