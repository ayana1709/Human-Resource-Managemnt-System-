import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function UserListing({ auth, users }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUserType, setSelectedUserType] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleUserTypeChange = (e) => {
        setSelectedUserType(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedUserType ? user.user_type === selectedUserType : true) &&
            (selectedDepartment
                ? user.department_name === selectedDepartment
                : true)
        );
    });

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <div className="container mx-auto p-4">
                                    <h1 className="text-2xl font-bold mb-4">
                                        User List
                                    </h1>
                                    <div className="mb-4 flex flex-wrap gap-7">
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            placeholder="Search by name"
                                            className="p-3 border rounded-md flex-grow md:flex-grow-1"
                                        />
                                        <select
                                            value={selectedUserType}
                                            onChange={handleUserTypeChange}
                                            className="p-3 border rounded-md flex-grow md:flex-grow-1"
                                        >
                                            <option value="">
                                                All User Types
                                            </option>
                                            <option value="admin">Admin</option>
                                            <option value="hr">HR</option>
                                            <option value="department_manager">
                                                Department Manager
                                            </option>
                                            <option value="employee">
                                                Employee
                                            </option>
                                        </select>
                                        <select
                                            value={selectedDepartment}
                                            onChange={handleDepartmentChange}
                                            className="p-3 border rounded-md flex-grow md:flex-grow-1"
                                        >
                                            <option value="">
                                                All Departments
                                            </option>
                                            <option value="Graphics Designing">
                                                Graphics Designing
                                            </option>
                                            <option value="Marketing">
                                                Marketing
                                            </option>
                                            <option value="Web Development">
                                                Web Development
                                            </option>
                                        </select>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border">
                                            <thead className="bg-gray-400">
                                                <tr>
                                                    <th className="py-2 px-4 border ">
                                                        ID
                                                    </th>
                                                    <th className="py-2 px-4 border ">
                                                        Name
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Email
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Role
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Department
                                                    </th>
                                                    <th className="py-2 px-4 border">
                                                        Created At
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredUsers.map((user) => (
                                                    <tr key={user.id}>
                                                        <td className="py-2 px-4 border">
                                                            {user.id}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.name}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.email}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {user.user_type}
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {
                                                                user.department_name
                                                            }
                                                        </td>
                                                        <td className="py-2 px-4 border">
                                                            {new Date(
                                                                user.created_at
                                                            ).toLocaleDateString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
