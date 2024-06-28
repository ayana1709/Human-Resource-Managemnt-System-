// resources/js/Pages/Trainings/Show.jsx

import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const Show = () => {
    const { training } = usePage().props;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{training.title}</h1>
            <p>{training.description}</p>
            <InertiaLink
                href={route("trainings.index")}
                className="btn btn-secondary mt-4"
            >
                Back to Trainings
            </InertiaLink>
        </div>
    );
};

export default Show;
