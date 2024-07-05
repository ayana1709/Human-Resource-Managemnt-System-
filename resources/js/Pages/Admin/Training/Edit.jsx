import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const Edit = () => {
    const { training, users } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({
        title: training.title,
        description: training.description,
        users: training.users.map((user) => user.id),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("trainings.update", training.id));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setData(
            "users",
            checked
                ? [...data.users, value]
                : data.users.filter((userId) => userId !== value)
        );
    };

    const handleRemoveUser = (userId) => {
        setData(
            "users",
            data.users.filter((id) => id !== userId)
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Edit Training
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.title && (
                        <div className="text-red-500 mt-1 text-sm">
                            {errors.title}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                    {errors.description && (
                        <div className="text-red-500 mt-1 text-sm">
                            {errors.description}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Select Users
                    </label>
                    {users.map((user) => (
                        <div key={user.id} className="mb-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value={user.id}
                                    checked={data.users.includes(user.id)}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{user.name}</span>
                            </label>
                        </div>
                    ))}
                    {errors.users && (
                        <div className="text-red-500 mt-1 text-sm">
                            {errors.users}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Selected Users
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {data.users.map((userId) => {
                            const user = users.find((u) => u.id === userId);
                            return (
                                <div
                                    key={user.id}
                                    className="bg-gray-200 px-4 py-2 rounded-full flex items-center space-x-2"
                                >
                                    <span>{user.name}</span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveUser(user.id)
                                        }
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        &times;
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300"
                    disabled={processing}
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Edit;
