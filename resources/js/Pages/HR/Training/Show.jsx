import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const Show = () => {
    const { training } = usePage().props;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">
                {training.title}
            </h1>
            <p className="mb-6">{training.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Participants</h2>
            <ul className="mb-6">
                {training.users.length > 0 ? (
                    training.users.map((user) => (
                        <li key={user.id} className="mb-2">
                            {user.name}
                        </li>
                    ))
                ) : (
                    <li>No participants assigned.</li>
                )}
            </ul>
            {/* <InertiaLink
                href={route("trainings.index")}
                className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition duration-300"
            >
                Back to Trainings
            </InertiaLink> */}
        </div>
    );
};

export default Show;
