import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Sidebar from "@/Components/Sidebar";
function AdminSidebar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <ul>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </li>
                </Link>
                <Link href={"/admin/users"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        User List
                    </li>
                </Link>
                <Link href={"/admin/attendance"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Attendance
                    </li>
                </Link>
                <Link href={"/admin/leave"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Leave
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        calander
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Schedule
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Payroll
                    </li>
                </Link>
                <Link href={"dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Report
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Training
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Recurtemnt
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Payroll
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Performance Manegemnt
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Message
                    </li>
                </Link>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Notification
                    </li>
                </Link>
                <Link href={"/admin/users"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Approvemnt
                    </li>
                </Link>

                <li className="flex items-center p-2 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Settings
                </li>
                <li>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full text-left py-2 px-4 rounded hover:bg-gray-700 focus:outline-none"
                        >
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className="mr-2"
                            />
                            Dropdown
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 w-full mt-2 bg-gray-700 rounded shadow-lg">
                                <Link
                                    href="/link1"
                                    className="block py-2 px-4 hover:bg-gray-600"
                                >
                                    Link 1
                                </Link>
                                <Link
                                    href="/link2"
                                    className="block py-2 px-4 hover:bg-gray-600"
                                >
                                    Link 2
                                </Link>
                                <Link
                                    href="/link3"
                                    className="block py-2 px-4 hover:bg-gray-600"
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
