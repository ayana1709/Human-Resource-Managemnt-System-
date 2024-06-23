// resources/js/Pages/JobPostings/Index.jsx
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

export default function Index() {
    const { postings } = usePage().props;

    return (
        <div>
            <h1>Job Postings</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Roles</th>
                        <th>Responsibilities</th>
                        <th>Qualifications</th>
                        <th>Skills</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {postings.map((posting) => (
                        <tr key={posting.id}>
                            <td>
                                <Link
                                    href={route(
                                        "job-postings.show",
                                        posting.id
                                    )}
                                    className="text-blue-500"
                                >
                                    {posting.title}
                                </Link>
                            </td>
                            <td>{posting.description}</td>
                            <td>{posting.roles}</td>
                            <td>{posting.responsibilities}</td>
                            <td>{posting.qualifications}</td>
                            <td>{posting.skills}</td>
                            <td>
                                <Link
                                    href={route(
                                        "job-postings.show",
                                        posting.id
                                    )}
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
