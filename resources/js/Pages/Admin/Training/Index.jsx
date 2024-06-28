// resources/js/Pages/Trainings/Index.jsx

import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Index() {
    const { trainings } = usePage().props;

    return (
        <div>
            <h1>Trainings</h1>
            <Link href={route("trainings.create")} className="btn btn-primary">
                Create Training
            </Link>
            <ul>
                {trainings.map((training) => (
                    <li key={training.id}>
                        <h2>{training.title}</h2>
                        <p>{training.description}</p>
                        <Link
                            href={route("trainings.show", training.id)}
                            className="btn btn-info"
                        >
                            View
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
