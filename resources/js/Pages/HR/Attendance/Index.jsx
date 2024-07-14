import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import HrSidebar from "@/Components/Sidebar/HrSidebar";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCheckCircle, faTimesCircle);

export default function Index({ auth }) {
    const [users, setUsers] = useState([]);
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        // Fetch users
        axios
            .get(route("users.index"))
            .then((response) => {
                console.log("Users fetched:", response.data.users);
                setUsers(response.data.users);
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
    }, []);

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
                        <HrSidebar />

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
                                                                                <div className="text-xs text-gray-500">
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
