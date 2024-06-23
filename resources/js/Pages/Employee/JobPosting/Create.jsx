// resources/js/Pages/JobApplications/Create.jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

export default function Create() {
    const { jobPosting } = usePage().props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("resume", resume);

        Inertia.post(
            route("job-postings.apply.store", jobPosting.id),
            formData
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Apply for {jobPosting.title}
            </h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Resume
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}
