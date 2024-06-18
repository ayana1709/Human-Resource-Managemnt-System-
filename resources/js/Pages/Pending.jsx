import React from "react";
import { Head } from "@inertiajs/react";

export default function Pending() {
    return (
        <div className="container mx-auto text-center">
            <Head title="Pending Approval" />
            <h1 className="text-2xl font-bold my-8">
                Your account is pending approval
            </h1>
            <p>Please wait for an admin to approve your registration.</p>
        </div>
    );
}
