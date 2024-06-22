import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Show = () => {
    const { jobRequisition } = usePage().props;

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Job Requisition Details</h1>
            <div className="mb-4">
                <label className="block font-bold mb-2">Title:</label>
                <p>{jobRequisition.title}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Description:</label>
                <p>{jobRequisition.description}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Department:</label>
                <p>{jobRequisition.department}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Status:</label>
                <p>{jobRequisition.status}</p>
            </div>
            <InertiaLink
                href="/job-requisitions"
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Back to List
            </InertiaLink>
        </div>
    );
};

export default Show;
