// resources/js/Pages/Admin/JobPosting/JobApplications.jsx
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const JobApplications = ({ jobPosting, applications }) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                Applications for {jobPosting.title}
            </h1>
            <InertiaLink
                href={route("job-postings.index")}
                className="text-blue-500 mb-4 inline-block"
            >
                Back to Job Postings
            </InertiaLink>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((application) => (
                    <div
                        key={application.id}
                        className="p-4 bg-white rounded shadow-md"
                    >
                        <h2 className="text-xl font-semibold">
                            {application.name}
                        </h2>
                        <p>
                            <strong>Email:</strong> {application.email}
                        </p>
                        <p>
                            <strong>Cover Letter:</strong>{" "}
                            {application.cover_letter}
                        </p>
                        <a
                            href={`/storage/${application.resume}`}
                            target="_blank"
                            className="text-blue-500"
                        >
                            View Resume
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplications;
