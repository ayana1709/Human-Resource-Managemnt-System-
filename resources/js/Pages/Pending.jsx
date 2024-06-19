import React, { useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Pending() {
    const { user, flash } = usePage().props;

    useEffect(() => {
        if (flash && flash.message) {
            alert(flash.message);
        }

        // Redirect to dashboard if user is approved
        if (user.approved) {
            alert("Your registration has been approved!");
            Inertia.visit("/dashboard");
        }
    }, [user, flash]);

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
