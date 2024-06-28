import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faChartLine,
    faCog,
    faCalendar,
    faCalendarCheck,
    faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

function AdminSidebar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex flex-col h-full min-h-screen bg-gray-800 text-white w-64 sm:w-48 md:w-56 lg:w-64 p-4">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
            </div>
            <ul className="flex-1">
                <li>
                    <Link
                        href="/dashboard"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/users"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        User List
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/attendance"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Attendance
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/leave"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Leave
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/user"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Approvemnt
                    </Link>
                </li>
                <li>
                    <Link
                        href="/calendar-events/create"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faCalendarPlus}
                            className="mr-2"
                        />
                        Create Calendar
                    </Link>
                </li>
                <li>
                    <Link
                        href="/calendarevents"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            className="mr-2"
                        />
                        View Calendar
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shifts"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Create Shift
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shift-assignments"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Shift Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/job-requisitions"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Job Requisition
                    </Link>
                </li>
                <li>
                    <Link
                        href="/job-postings"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Job Posting
                    </Link>
                </li>
                <li>
                    <Link
                        href="/messages"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Message
                    </Link>
                </li>
                <li>
                    <Link
                        href="/job-postings-cards"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Job cards
                    </Link>
                </li>
                <li>
                    <Link
                        href="/trainings"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Training
                    </Link>
                </li>
                <li>
                    <Link
                        href="/payroll/create"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Payroll create
                    </Link>
                    <Link
                        href="/payroll"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Payroll Index
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Performance Management
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Notification
                    </Link>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-700 rounded transition">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Settings
                </li>
                <li>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded focus:outline-none transition"
                        >
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className="mr-2"
                            />
                            Dropdown
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 w-full mt-2 bg-gray-700 rounded shadow-lg z-10">
                                <Link
                                    href="/link1"
                                    className="block py-2 px-4 hover:bg-gray-600 rounded transition"
                                >
                                    Link 1
                                </Link>
                                <Link
                                    href="/link2"
                                    className="block py-2 px-4 hover:bg-gray-600 rounded transition"
                                >
                                    Link 2
                                </Link>
                                <Link
                                    href="/link3"
                                    className="block py-2 px-4 hover:bg-gray-600 rounded transition"
                                >
                                    Link 3
                                </Link>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AdminSidebar;
