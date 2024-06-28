import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const JobApplicationForm = ({ postingId }) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        resume: null,
        cover_letter: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("job-postings.apply", postingId), {
            data,
            onSuccess: () => {
                // Optionally handle success, e.g., show confirmation
                console.log("Application submitted successfully");
            },
        });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = files ? files[0] : value;
        setData(name, newValue);
    };

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Job Application Form
            </h1>
            {flash.success && (
                <div className="bg-green-500 text-white p-2 mb-4 rounded items-center  ">
                    {flash.success}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Resume (PDF only)
                    </label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="cover_letter"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Cover Letter
                    </label>
                    <textarea
                        id="cover_letter"
                        name="cover_letter"
                        value={data.cover_letter}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                            processing
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-blue-600 transition duration-200"
                        }`}
                        disabled={processing}
                    >
                        {processing ? "Submitting..." : "Apply"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;
