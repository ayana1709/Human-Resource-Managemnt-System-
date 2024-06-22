import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Create = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        department: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/job-requisitions", values);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h1 className="text-xl font-bold mb-4">Create Job Requisition</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Department</label>
                    <input
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Submit
                </button>
                <InertiaLink href="/job-requisitions" className="ml-4">
                    Cancel
                </InertiaLink>
            </form>
        </div>
    );
};

export default Create;
