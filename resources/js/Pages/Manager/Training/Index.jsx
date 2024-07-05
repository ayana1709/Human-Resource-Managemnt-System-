// resources/js/Pages/Trainings/Index.jsx

import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import HrSidebar from "@/Components/Sidebar/HrSidebar";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

const Index = ({ auth }) => {
    const { trainings } = usePage().props;

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <DepManagerSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <div className="container mx-auto p-4">
                                    <h1 className="text-3xl font-bold mb-6 text-center">
                                        Trainings
                                    </h1>
                                    <div className="flex justify-left mb-6">
                                        <div className="flex items-end flex-grow md:flex-grow-1">
                                            <InertiaLink
                                                href={route("trainings.create")}
                                                className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300 "
                                            >
                                                Create Training
                                            </InertiaLink>
                                        </div>

                                        <InertiaLink
                                            href={"/notification"}
                                            className="btn btn-primary px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300"
                                        >
                                            Assigned Trainings
                                        </InertiaLink>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {trainings.map((training) => (
                                            <div
                                                key={training.id}
                                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                            >
                                                <h2 className="text-2xl font-semibold mb-2">
                                                    {training.title}
                                                </h2>
                                                <p className="text-gray-700 mb-4">
                                                    {training.description}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <InertiaLink
                                                        href={route(
                                                            "trainings.show",
                                                            training.id
                                                        )}
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        View Details
                                                    </InertiaLink>
                                                    <div className="flex space-x-2">
                                                        <InertiaLink
                                                            href={route(
                                                                "trainings.edit",
                                                                training.id
                                                            )}
                                                            className="text-yellow-500 hover:underline"
                                                        >
                                                            Edit
                                                        </InertiaLink>
                                                        <button
                                                            onClick={() => {
                                                                if (
                                                                    confirm(
                                                                        "Are you sure you want to delete this training?"
                                                                    )
                                                                ) {
                                                                    Inertia.delete(
                                                                        route(
                                                                            "trainings.destroy",
                                                                            training.id
                                                                        )
                                                                    );
                                                                }
                                                            }}
                                                            className="text-red-500 hover:underline"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
