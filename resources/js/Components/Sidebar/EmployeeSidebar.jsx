// resources/js/Components/EmployeeSidebar.jsx

import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faChartLine,
    faClipboardCheck,
    faSignOut,
    faSignOutAlt,
    faCalendarAlt,
    faClockFour,
    faMoneyCheck,
    faMoneyCheckAlt,
    faComments,
    faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { usePage } from "@inertiajs/react";

const EmployeeSidebar = () => {
    const { notifications = [] } = usePage().props; // Provide a default empty array if notifications are undefined

    // Calculate unread notifications count
    const unreadNotificationsCount = notifications.filter(
        (notification) => !notification.read_at
    ).length;

    return (
        <div className="flex flex-col h-full min-h-screen bg-gray-800 text-white w-64 sm:w-48 md:w-56 lg:w-64 p-4">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-center">
                    Employee Panel
                </h2>
            </div>
            <ul>
                <Link href="/dashboard">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-4" />
                        Home
                    </li>
                </Link>
                <Link href="/attendance/create">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon
                            icon={faClipboardCheck}
                            className="mr-4"
                        />
                        Attendance
                    </li>
                </Link>
                <Link href="/leave/create">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
                        Leave Request
                    </li>
                </Link>
                <Link href="/calendarevents">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-4"
                        />
                        Calendar
                    </li>
                </Link>
                <Link href="/user-shifts">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faClockFour} className="mr-4" />
                        View Shift
                    </li>
                </Link>
                <Link href="/payrol">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon
                            icon={faMoneyCheckAlt}
                            className="mr-4"
                        />
                        Payroll
                    </li>
                </Link>
                <Link href="/messages">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faComments} className="mr-4" />
                        Messages
                    </li>
                </Link>
                <Link href="/notification">
                    <li className="flex items-center p-2 hover:bg-gray-700 relative">
                        <FontAwesomeIcon
                            icon={faChalkboardUser}
                            className="mr-4"
                        />
                        Training
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default EmployeeSidebar;
