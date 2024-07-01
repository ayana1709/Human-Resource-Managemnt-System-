// resources/js/Pages/JobRequisitions/Index.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

export default function Index() {
    const { requisitions } = usePage().props;

    const handleApprove = (id) => {
        Inertia.post(route("job-requisitions.approve", id));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Job Requisitions
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                Title
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                Description
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                Department
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                Status
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {requisitions.map((req) => (
                            <tr
                                key={req.id}
                                className="border-b hover:bg-gray-100"
                            >
                                <td className="py-4 px-6 text-sm text-gray-800">
                                    {req.title}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-800">
                                    {req.description}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-800">
                                    {req.department}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-800">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${
                                            req.status === "pending"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : "bg-green-200 text-green-800"
                                        }`}
                                    >
                                        {req.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-800">
                                    {req.status === "pending" && (
                                        <button
                                            onClick={() =>
                                                handleApprove(req.id)
                                            }
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
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
        </div>
    );
}
