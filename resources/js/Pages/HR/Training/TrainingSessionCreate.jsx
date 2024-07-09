import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";

const TrainingSessionCreate = ({ training }) => {
    const { data, setData, post, processing, errors } = useForm({
        date: "",
        location: "",
        details: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("trainings.sessions.store", training.id));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Create Session for {training.title}
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Date</label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        className="form-input mt-1 block w-full"
                    />
                    {errors.date && (
                        <div className="text-red-500 mt-1">{errors.date}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        value={data.location}
                        onChange={(e) => setData("location", e.target.value)}
                        className="form-input mt-1 block w-full"
                    />
                    {errors.location && (
                        <div className="text-red-500 mt-1">
                            {errors.location}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Details</label>
                    <textarea
                        value={data.details}
                        onChange={(e) => setData("details", e.target.value)}
                        className="form-input mt-1 block w-full"
                    ></textarea>
                    {errors.details && (
                        <div className="text-red-500 mt-1">
                            {errors.details}
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

export default TrainingSessionCreate;
