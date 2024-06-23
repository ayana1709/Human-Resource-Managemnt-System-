// resources/js/Pages/JobPostings/Show.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
// import { usePage } from "@inertiajs/inertia-react";

export default function Show() {
    const { posting } = usePage().props;

    return (
        <div>
            <h1>Job Posting Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">{posting.title}</h2>
                <p>
                    <strong>Description:</strong> {posting.description}
                </p>
                <p>
                    <strong>Roles:</strong> {posting.roles}
                </p>
                <p>
                    <strong>Responsibilities:</strong>{" "}
                    {posting.responsibilities}
                </p>
                <p>
                    <strong>Qualifications:</strong> {posting.qualifications}
                </p>
                <p>
                    <strong>Skills:</strong> {posting.skills}
                </p>
                <p>
                    <strong>Created By:</strong> {posting.creator.name}
                </p>
            </div>
            <button
                onClick={() => Inertia.visit(route("job-postings.index"))}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Back to List
            </button>
        </div>
    );
}
