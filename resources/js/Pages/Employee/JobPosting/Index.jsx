// resources/js/Pages/JobPostings/Index.jsx
import React from "react";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/inertia-react";

export default function Index() {
    const { postings } = usePage().props;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Job Postings
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {postings.map((posting) => (
                    <div
                        key={posting.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <h2 className="text-xl font-bold text-blue-600 mb-2">
                            {posting.title}
                        </h2>
                        <p className="text-gray-700 mb-4">
                            {posting.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Roles:</strong> {posting.roles}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Responsibilities:</strong>{" "}
                            {posting.responsibilities}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Qualifications:</strong>{" "}
                            {posting.qualifications}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Skills:</strong> {posting.skills}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                            <Link
                                href={route("job-postings.show", posting.id)}
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </Link>
                            <Link
                                href={route("job-postings.apply", posting.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            >
                                Apply
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
