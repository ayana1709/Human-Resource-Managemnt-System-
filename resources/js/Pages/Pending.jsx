import React from "react";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Pending() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            alert(flash.message); // Display the flash message as an alert
        }
    }, [flash]);
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
