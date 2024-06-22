import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ jobRequisitions }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Job Requisitions</h1>
            <InertiaLink
                href="/job-requisitions/create"
                className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
            >
                Create Job Requisition
            </InertiaLink>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Title</th>
                        <th className="border-b py-2 px-4">Department</th>
                        <th className="border-b py-2 px-4">Status</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobRequisitions.map((req) => (
                        <tr key={req.id}>
                            <td className="border-b py-2 px-4">{req.title}</td>
                            <td className="border-b py-2 px-4">
                                {req.department}
                            </td>
                            <td className="border-b py-2 px-4">{req.status}</td>
                            <td className="border-b py-2 px-4">
                                <InertiaLink
                                    href={`/job-requisitions/${req.id}/edit`}
                                    className="text-blue-500"
                                >
                                    Edit
                                </InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
