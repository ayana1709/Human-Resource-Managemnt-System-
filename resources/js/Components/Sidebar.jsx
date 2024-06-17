import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "@/Components/Sidebar";
function Sidebar() {
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
                        Leave Response
                    </li>
                </Link>
                <Link href={"/admin/leave"}>
                    <li className="flex items-center p-2 hover:bg-gray-700">
                        <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                        calander
                    </li>
                </Link>
                <li className="flex items-center p-2 hover:bg-gray-700">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Settings
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
