// resources/js/Pages/JobRequisitions/Create.jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("job-requisitions.store"), {
            title,
            description,
            department,
        });
    };

    return (
        <div>
            <h1>Create Job Requisition</h1>
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
                    <label>Department</label>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
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
