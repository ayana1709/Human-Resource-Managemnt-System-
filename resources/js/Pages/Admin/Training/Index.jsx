// resources/js/Pages/Trainings/Index.jsx

import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const Index = () => {
    const { trainings } = usePage().props;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Trainings</h1>
            <InertiaLink
                href={route("trainings.create")}
                className="btn btn-primary mb-4"
            >
                Create Training
            </InertiaLink>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trainings.map((training) => (
                    <div
                        key={training.id}
                        className="p-4 bg-white rounded shadow-md"
                    >
                        <h2 className="text-xl font-semibold">
                            {training.title}
                        </h2>
                        <p>{training.description}</p>
                        <InertiaLink
                            href={route("trainings.show", training.id)}
                            className="text-blue-500"
                        >
                            View Details
                        </InertiaLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
