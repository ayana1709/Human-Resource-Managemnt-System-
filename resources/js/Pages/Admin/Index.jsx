// resources/js/Pages/JobRequisitions/Index.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

export default function Index() {
    const { requisitions } = usePage().props;

    const handleApprove = (id) => {
        Inertia.post(route("job-requisitions.approve", id));
    };

    return (
        <div>
            <h1>Job Requisitions</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requisitions.map((req) => (
                        <tr key={req.id}>
                            <td>{req.title}</td>
                            <td>{req.description}</td>
                            <td>{req.department}</td>
                            <td>{req.status}</td>
                            <td>
                                {req.status === "pending" && (
                                    <button
                                        onClick={() => handleApprove(req.id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                        Approve
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
