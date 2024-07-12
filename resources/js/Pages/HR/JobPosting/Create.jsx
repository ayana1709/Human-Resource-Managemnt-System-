import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import HrSidebar from "@/Components/Sidebar/HrSidebar";

export default function Create({ auth }) {
    const { flash } = usePage().props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [roles, setRoles] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [skills, setSkills] = useState("");
    const [platforms, setPlatforms] = useState({
        careerPage: false,
        jobBoards: false,
        socialMedia: false,
        recruitmentAgencies: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPlatforms((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("job-postings.store"), {
            title,
            description,
            roles,
            responsibilities,
            qualifications,
            skills,
        });
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />
                <div className="h-screen flex flex-col">
                    <div className="flex flex-1">
                        <HrSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                                    <h1 className="text-2xl font-bold mb-6">
                                        Create Job Posting
                                    </h1>
                                    
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Description
                                            </label>
                                            <textarea
                                                value={description}
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Roles
                                            </label>
                                            <textarea
                                                value={roles}
                                                onChange={(e) =>
                                                    setRoles(e.target.value)
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Responsibilities
                                            </label>
                                            <textarea
                                                value={responsibilities}
                                                onChange={(e) =>
                                                    setResponsibilities(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Qualifications
                                            </label>
                                            <textarea
                                                value={qualifications}
                                                onChange={(e) =>
                                                    setQualifications(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">
                                                Skills
                                            </label>
                                            <textarea
                                                value={skills}
                                                onChange={(e) =>
                                                    setSkills(e.target.value)
                                                }
                                                required
                                                className="w-full border rounded px-4 py-2 mt-2 focus:ring focus:ring-blue-200"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                                        >
                                            Create
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
