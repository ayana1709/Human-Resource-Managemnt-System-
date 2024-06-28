// resources/js/Pages/Trainings/AssignUser.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function AssignUser({ training, users }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("trainings.assignUser", training.id));
    };

    return (
        <div>
            <h1>Assign User to {training.title}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User</label>
                    <select
                        value={data.user_id}
                        onChange={(e) => setData("user_id", e.target.value)}
                    >
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    {errors.user_id && <div>{errors.user_id}</div>}
                </div>
                <button type="submit" disabled={processing}>
                    Assign
                </button>
            </form>
        </div>
    );
}
