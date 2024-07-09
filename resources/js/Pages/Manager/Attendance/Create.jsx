import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

export default function Create({ auth }) {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        date: formatDate(new Date()), // Initialize date with today's date
        check_in_time: null,
        check_out_time: null,
    });

    const [conflictError, setConflictError] = useState(null);

    useEffect(() => {
        setData("date", formatDate(new Date())); // Update date when component mounts
    }, []);

    const handleCheckIn = () => {
        setData("check_in_time", formatTime(new Date()));
    };

    const handleCheckOut = () => {
        setData("check_out_time", formatTime(new Date()));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("attendance.store"), {
            onError: (errors) => {
                if (errors.response && errors.response.status === 409) {
                    setConflictError(errors.response.data.error);
                }
            },
        });
    };

    // Function to format date as YYYY-MM-DD for input type date
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Function to format time as HH:MM:SS
    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Record Attendance" />

            <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <DepManagerSidebar />
                    <main className="flex-1 bg-gray-100">
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-4">
                                Record Attendance
                            </h1>
                            {flash.success && (
                                <div className="bg-green-500 text-white p-2 mb-4 rounded items-center  ">
                                    {flash.success}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2">Date</label>
                                    <input
                                        type="text"
                                        value={data.date}
                                        readOnly // Make the input read-only
                                        className="border p-2 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="button"
                                        onClick={handleCheckIn}
                                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Check In
                                    </button>
                                    {data.check_in_time && (
                                        <span className="text-green-500">
                                            Checked in at {data.check_in_time}
                                        </span>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="button"
                                        onClick={handleCheckOut}
                                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Check Out
                                    </button>
                                    {data.check_out_time && (
                                        <span className="text-red-500">
                                            Checked out at {data.check_out_time}
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Submit
                                </button>
                            </form>
                            {conflictError && (
                                <div className="text-red-500 mt-2">
                                    {conflictError}
                                </div>
                            )}
                            {errors && (
                                <div className="text-red-500 mt-2">
                                    {Object.keys(errors).map((key) => (
                                        <p key={key}>{errors[key]}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
