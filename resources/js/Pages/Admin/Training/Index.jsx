// resources/js/Pages/Trainings/Index.jsx

import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Index = () => {
    const { trainings } = usePage().props;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Trainings</h1>
            <div className="flex justify-center mb-6">
                <InertiaLink
                    href={route("trainings.create")}
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300"
                >
                    Create Training
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
                                href={route("trainings.show", training.id)}
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </InertiaLink>
                            <div className="flex space-x-2">
                                <InertiaLink
                                    href={route("trainings.edit", training.id)}
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
    );
};

export default Index;
