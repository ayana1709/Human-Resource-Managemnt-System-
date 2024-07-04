// resources/js/Pages/Leave/Create.jsx

import React from "react";
import { useForm } from "@inertiajs/inertia-react";
// import DashboardLayout from "../../Layouts/DashboardLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        start_date: "",
        end_date: "",
        reason: "",
    });

    const { flash } = usePage().props;
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("leave.store"));
        // console.log(data);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="h-screen flex flex-col">
                {/* <Navbar /> */}
                <div className="flex flex-1">
                    <DepManagerSidebar />
                    <main className="flex-1 bg-gray-100">
                        <div className="p-4">
                            <>
                                <h1 className="text-2xl font-bold mb-4">
                                    Request Leave
                                </h1>
                                {flash.success && (
                                    <div className="mb-4 text-green-500">
                                        {flash.success}
                                    </div>
                                )}
                                {flash.error && (
                                    <div className="mb-4 text-red-500">
                                        {flash.error}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block mb-2">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            value={data.start_date}
                                            onChange={(e) =>
                                                setData(
                                                    "start_date",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="border p-2 w-full"
                                        />
                                        {errors.start_date && (
                                            <div className="text-red-500 mt-1">
                                                {errors.start_date}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            value={data.end_date}
                                            onChange={(e) =>
                                                setData(
                                                    "end_date",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="border p-2 w-full"
                                        />
                                        {errors.end_date && (
                                            <div className="text-red-500 mt-1">
                                                {errors.end_date}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2">
                                            Reason
                                        </label>
                                        <textarea
                                            value={data.reason}
                                            onChange={(e) =>
                                                setData(
                                                    "reason",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="border p-2 w-full"
                                        />
                                        {errors.reason && (
                                            <div className="text-red-500 mt-1">
                                                {errors.reason}
                                            </div>
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
                            </>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
