import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faChartLine,
    faCog,
    faCalendar,
    faCalendarCheck,
    faCalendarPlus,
    faList,
    faClipboardCheck,
    faThumbsUp,
    faUserPlus,
    faSignOut,
    faClock,
    faClipboardList,
    faClipboard,
    faBullhorn,
    faComment,
    faComments,
    faChalkboardTeacher,
    faMoneyCheckAlt,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Sidebar from "@/Components/Sidebar";
function DepManagerSidebar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="flex flex-col h-full min-h-screen bg-gray-800 text-white w-64 sm:w-48 md:w-56 lg:w-64 p-4">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-center">
                    Manager Panel
                </h2>
            </div>
            <ul className="flex-1">
                <li>
                    <Link
                        href="/dashboard"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-4" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/userlist"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faUsers} className="mr-4" />
                        Team
                    </Link>
                </li>
                <li>
                    <Link
                        href="/attendance/create"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faClipboardCheck}
                            className="mr-4"
                        />
                        Attendance
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/attendance"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faClipboardCheck}
                            className="mr-4"
                        />
                        Team Attendance
                    </Link>
                </li>
                <li>
                    <Link
                        href="/leave/create"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faSignOut} className="mr-4" />
                        Leave
                    </Link>
                </li>

                <li>
                    <Link
                        href="/calendarevents"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faCalendar} className="mr-4" />
                        Calander
                    </Link>
                </li>

                <li>
                    <Link
                        href="/user-shifts"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faClock} className="mr-4" />
                        Shift
                    </Link>
                </li>
                <li>
                    <Link
                        href="/job-requisitions/create"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            className="mr-4"
                        />
                        Hiring Request
                    </Link>
                </li>

                <li>
                    <Link
                        href="/messages"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faComments} className="mr-4" />
                        Message
                    </Link>
                </li>

                <li>
                    <Link
                        href="/trainings"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            className="mr-4"
                        />
                        Training
                    </Link>
                </li>
                <li>
                    <Link
                        href="/payrol"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faMoneyCheckAlt}
                            className="mr-4"
                        />
                        Payroll
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DepManagerSidebar;
