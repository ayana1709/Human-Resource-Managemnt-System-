// resources/js/Pages/Trainings/Create.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("trainings.store"));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Training</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="form-input mt-1 block w-full"
                    />
                    {errors.title && (
                        <div className="text-red-500 mt-1">{errors.title}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="form-input mt-1 block w-full"
                    ></textarea>
                    {errors.description && (
                        <div className="text-red-500 mt-1">
                            {errors.description}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default Create;
