// resources/js/Pages/Trainings/Show.jsx

import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Show() {
    const { training, users } = usePage().props;

    return (
        <div>
            <h1>{training.title}</h1>
            <p>{training.description}</p>
            <Link href={route("trainings.index")} className="btn btn-secondary">
                Back
            </Link>
            <Link
                href={route("trainings.assignUser", training.id)}
                className="btn btn-primary"
            >
                Assign User
            </Link>
            <h2>Assigned Users</h2>
            <ul>
                {training.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
