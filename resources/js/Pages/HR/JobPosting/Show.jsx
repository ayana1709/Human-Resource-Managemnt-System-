// resources/js/Pages/JobPostings/Show.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function Show() {
    const { posting } = usePage().props;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Job Posting Details
            </h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                    {posting.title}
                </h2>
                <div className="mb-4">
                    <p className="mb-2">
                        <strong className="text-gray-700">Description:</strong>{" "}
                        {posting.description}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-700">Roles:</strong>{" "}
                        {posting.roles}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-700">
                            Responsibilities:
                        </strong>{" "}
                        {posting.responsibilities}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-700">
                            Qualifications:
                        </strong>{" "}
                        {posting.qualifications}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-700">Skills:</strong>{" "}
                        {posting.skills}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-700">Created By:</strong>{" "}
                        {posting.creator.name}
                    </p>
                </div>
                <button
                    onClick={() => Inertia.visit(route("job-postings.index"))}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Back to List
                </button>
            </div>
        </div>
    );
}
