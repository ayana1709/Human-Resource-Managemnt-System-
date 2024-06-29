import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "@/Components/Sidebar";
function EmployeeSidebar() {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <ul>
                <Link href={"/dashboard"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </li>
                </Link>
                <Link href={"/attendance/create"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Attendance
                    </li>
                </Link>
                <Link href={"/leave/create"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Leave Request
                    </li>
                </Link>
                <Link href={"/calendarevents"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        calander
                    </li>
                </Link>
                <Link href={"/user-shifts"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        View Shift
                    </li>
                </Link>
                <Link href={"/user-shifts"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        View Shift
                    </li>
                </Link>
                <Link href={"/employee/payroll"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        payroll
                    </li>
                </Link>

                <Link href={"/messages"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Message
                    </li>
                </Link>
                <Link href={"/notification"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        Notification
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default EmployeeSidebar;
