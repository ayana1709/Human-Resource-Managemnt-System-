import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";
import axios from "axios";

export default function Index({ auth }) {
    const [searchDate, setSearchDate] = useState("");
    const [users, setUsers] = useState([]);
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        // Fetch users
        axios
            .get(route("users.index"))
            .then((response) => {
                // Filter users based on the department of the authenticated user
                const teamUsers = response.data.users.filter(
                    (user) => user.department_name === auth.user.department_name
                );
                console.log("Team users fetched:", teamUsers);
                setUsers(teamUsers);
            })
            .catch((error) => console.error("Error fetching users:", error));

        // Fetch attendances
        axios
            .get(route("attendances.index"))
            .then((response) => {
                console.log("Attendances fetched:", response.data.attendances);
                setAttendances(response.data.attendances);
            })
            .catch((error) =>
                console.error("Error fetching attendances:", error)
            );
    }, [auth.user.department_id]);

    const handleDateChange = (e) => {
        setSearchDate(e.target.value);
    };

    const getUserAttendanceForDate = (userId, date) => {
        return attendances.find(
            (attendance) =>
                attendance.user_id === userId && attendance.date === date
        );
    };

    const uniqueDates =
        attendances.length > 0
            ? [...new Set(attendances.map((attendance) => attendance.date))]
            : [];

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <DepManagerSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h1 className="text-2xl font-bold mb-4">
                                    Attendance Records
                                </h1>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border">
                                        <thead className="bg-gray-400">
                                            <tr>
                                                <th className="py-2 px-4 border">
                                                    User
                                                </th>
                                                {uniqueDates.map((date) => (
                                                    <th
                                                        key={date}
                                                        className="py-2 px-4 border"
                                                    >
                                                        {date}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.length > 0 ? (
                                                users.map((user) => (
                                                    <tr key={user.id}>
                                                        <td className="py-2 px-4 border">
                                                            {user.name}
                                                        </td>
                                                        {uniqueDates.map(
                                                            (date) => {
                                                                const attendance =
                                                                    getUserAttendanceForDate(
                                                                        user.id,
                                                                        date
                                                                    );
                                                                return (
                                                                    <td
                                                                        key={
                                                                            date
                                                                        }
                                                                        className="py-2 px-4 border"
                                                                    >
                                                                        {attendance ? (
                                                                            <>
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCheckCircle
                                                                                    }
                                                                                    className="text-green-500"
                                                                                />
                                                                                <div className="text-xs text-gray-500 mt-1">
                                                                                    <div>
                                                                                        Check
                                                                                        In:{" "}
                                                                                        {
                                                                                            attendance.check_in
                                                                                        }
                                                                                    </div>
                                                                                    <div>
                                                                                        Check
                                                                                        Out:{" "}
                                                                                        {attendance.check_out ||
                                                                                            "N/A"}
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        ) : (
                                                                            <FontAwesomeIcon
                                                                                icon={
                                                                                    faTimesCircle
                                                                                }
                                                                                className="text-red-500"
                                                                            />
                                                                        )}
                                                                    </td>
                                                                );
                                                            }
                                                        )}
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan={
                                                            uniqueDates.length +
                                                            1
                                                        }
                                                        className="py-2 px-4 border"
                                                    >
                                                        No users found.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
