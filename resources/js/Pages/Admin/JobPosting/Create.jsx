// resources/js/Pages/JobPostings/Create.jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [roles, setRoles] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [skills, setSkills] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("job-postings.store"), {
            title,
            description,
            roles,
            responsibilities,
            qualifications,
            skills,
        });
    };

    return (
        <div>
            <h1>Create Job Posting</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label>Roles</label>
                    <textarea
                        value={roles}
                        onChange={(e) => setRoles(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label>Responsibilities</label>
                    <textarea
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label>Qualifications</label>
                    <textarea
                        value={qualifications}
                        onChange={(e) => setQualifications(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label>Skills</label>
                    <textarea
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        required
                        className="border rounded px-4 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create
                </button>
            </form>
        </div>
    );
}
