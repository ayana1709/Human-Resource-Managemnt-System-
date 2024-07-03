import React from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function Shifts({ shifts, auth }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        Inertia.post(route("shifts.store"), data);
    };

    return (
        // <Layout>
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-8">
                                <>
                                    <h1 className="text-2xl font-bold mb-4">
                                        Shifts
                                    </h1>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4 mb-6"
                                    >
                                        <div>
                                            <label className="block text-gray-700">
                                                Shift Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Shift Name"
                                                className="border p-2 w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">
                                                Start Time
                                            </label>
                                            <input
                                                type="time"
                                                name="start_time"
                                                className="border p-2 w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700">
                                                End Time
                                            </label>
                                            <input
                                                type="time"
                                                name="end_time"
                                                className="border p-2 w-full"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white p-2 rounded"
                                        >
                                            Create Shift
                                        </button>
                                    </form>

                                    <ul>
                                        {shifts.map((shift) => (
                                            <li
                                                key={shift.id}
                                                className="border p-2 my-2 flex justify-between items-center"
                                            >
                                                <div>
                                                    <p className="font-bold">
                                                        {shift.name}
                                                    </p>
                                                    <p>
                                                        {shift.start_time} -{" "}
                                                        {shift.end_time}
                                                    </p>
                                                </div>
                                                <div>
                                                    <Link
                                                        href={route(
                                                            "shifts.edit",
                                                            shift.id
                                                        )}
                                                        className="text-blue-500 mr-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "shifts.destroy",
                                                            shift.id
                                                        )}
                                                        method="delete"
                                                        className="text-red-500"
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
