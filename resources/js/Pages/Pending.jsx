import React from "react";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Pending() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            alert(flash.message); // Display the flash message as an alert
        }

        // Check if there's a pending user awaiting approval to redirect to dashboard
        const userId = parseInt(window.inertia.page.props.pendingUserId);
        if (userId) {
            window.inertia.post("/admin/users/approve", {
                user_id: userId,
                department_name: department_name,
            });
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
