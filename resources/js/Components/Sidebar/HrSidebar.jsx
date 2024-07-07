import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
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
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UserProfile from "@/Pages/UserProfile";

function HrSidebar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [newLeaveRequestsCount, setNewLeaveRequestsCount] = useState(0);
    const [newRegisterRequestsCount, setNewRegisterRequestsCount] = useState(0);

    const [notificationCount, setNotificationCount] = useState(0);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    // counting new leave request
    useEffect(() => {
        axios
            .get(route("leave.requests.count"))
            .then((response) => {
                setNewLeaveRequestsCount(response.data.count);
            })
            .catch((error) => {
                console.error(
                    "Error fetching new leave requests count:",
                    error
                );
            });
    }, []);
    //counting new register request
    useEffect(() => {
        axios
            .get(route("admin.register-requests.count"))
            .then((response) => {
                setNewRegisterRequestsCount(response.data.count);
            })
            .catch((error) => {
                console.error(
                    "Error fetching new leave requests count:",
                    error
                );
            });
    }, []);

    // notification for attendance
    useEffect(() => {
        axios
            .get(route("attendance.new.count"))
            .then((response) => {
                setNotificationCount(response.data.count);
            })
            .catch((error) => {
                console.error(
                    "Error fetching new leave requests count:",
                    error
                );
            });
    }, []);

    //

    return (
        <div className="flex flex-col h-full min-h-screen bg-gray-800 text-white w-64 sm:w-48 md:w-56 lg:w-64 p-4">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-center">HR Panel</h2>
            </div>
            {/* <UserProfile /> */}
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
                        <FontAwesomeIcon icon={faList} className="mr-4" />
                        User List
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
                        Attendance
                        {notificationCount > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center ml-2">
                                {notificationCount}
                            </span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/user"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-4" />
                        New Register
                        {newRegisterRequestsCount > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center ml-2">
                                {newRegisterRequestsCount}
                            </span>
                        )}
                    </Link>
                </li>
                <li className="relative">
                    <Link
                        href="/admin/leave"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faSignOut} className="mr-4" />
                        Leave Request
                        {newLeaveRequestsCount > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center ml-2">
                                {newLeaveRequestsCount}
                            </span>
                        )}
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
                        href="/shift-assignments"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faClock} className="mr-4" />
                        Shift
                    </Link>
                </li>
                <li>
                    <Link
                        href="/job-requisitions"
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
                        href="/job-postings"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon icon={faBullhorn} className="mr-4" />
                        Job Posting
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
                        href="/payroll"
                        className="flex items-center p-2 hover:bg-gray-700 rounded transition"
                    >
                        <FontAwesomeIcon
                            icon={faMoneyCheckAlt}
                            className="mr-4"
                        />
                        Payroll
                    </Link>
                </li>
                {/* <div>hr ...</div>
                <Link href="/attendance/create">
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon
                            icon={faClipboardCheck}
                            className="mr-4"
                        />
                        Attendance
                    </li>
                </Link> */}
            </ul>
        </div>
    );
}

export default HrSidebar;
