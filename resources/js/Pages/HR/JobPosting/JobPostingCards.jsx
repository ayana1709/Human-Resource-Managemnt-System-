import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

import { Head } from "@inertiajs/react";

export default function JobPostingsCards({ auth }) {
    const { postings } = usePage().props;
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const [selectedPosting, setSelectedPosting] = useState(null);
    const [shareType, setShareType] = useState("link"); // or 'social'

    const openShareModal = (posting) => {
        setSelectedPosting(posting);
        setShareModalOpen(true);
    };

    const closeShareModal = () => {
        setShareModalOpen(false);
        setSelectedPosting(null);
        setShareType("link"); // Reset share type
    };

    const handleCopyLink = () => {
        const jobPostingLink = `${window.location.origin}/job-postings-cards/`;
        navigator.clipboard
            .writeText(jobPostingLink)
            .then(() => alert("Job posting link copied to clipboard"))
            .catch((error) => console.error("Error copying link:", error));
        closeShareModal();
    };

    const handleShareSocial = (platform) => {
        // Implement social media sharing logic based on platform
        let shareUrl = `${window.location.origin}/job-postings/${selectedPosting.id}`;
        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
            // Add more cases for other social media platforms as needed
            default:
                shareUrl = `${window.location.origin}/job-postings/${selectedPosting.id}`;
                break;
        }
        window.open(shareUrl, "_blank");
        closeShareModal();
    };

    return (
        <>
            <>
                <Head title="Job Postings" />

                <div className="h-screen flex flex-col">
                    <main className="flex-1 bg-gray-100">
                        <div className="p-4">
                            <h2 className="text-xl mb-4">Job Postings</h2>
                            <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
                                <h1 className="text-2xl font-bold mb-6">
                                    Available Job Postings
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {postings.map((posting) => (
                                        <div
                                            key={posting.id}
                                            className="bg-white p-4 rounded-lg shadow-md"
                                        >
                                            <h3 className="text-lg font-bold mb-2">
                                                {posting.title}
                                            </h3>
                                            <p className="text-gray-700 mb-2">
                                                {posting.description}
                                            </p>
                                            <p className="text-gray-600 mb-2">
                                                <strong>Roles: </strong>
                                                {posting.roles}
                                            </p>
                                            <p className="text-gray-600 mb-2">
                                                <strong>
                                                    Responsibilities:{" "}
                                                </strong>
                                                {posting.responsibilities}
                                            </p>
                                            <p className="text-gray-600 mb-2">
                                                <strong>
                                                    Qualifications:{" "}
                                                </strong>
                                                {posting.qualifications}
                                            </p>
                                            <p className="text-gray-600 mb-2">
                                                <strong>Skills: </strong>
                                                {posting.skills}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <Link
                                                    href={route(
                                                        "job-postings.apply",
                                                        posting.id
                                                    )}
                                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                                                >
                                                    Apply
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        openShareModal(posting)
                                                    }
                                                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
                                                >
                                                    Share
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Share Modal */}
                {shareModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-bold mb-4">
                                Share Job Posting
                            </h2>
                            <p className="mb-4">
                                Share job posting:{" "}
                                {selectedPosting && selectedPosting.title}
                            </p>
                            {shareType === "link" && (
                                <>
                                    <button
                                        onClick={handleCopyLink}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mr-2"
                                    >
                                        Copy Link
                                    </button>
                                    <button
                                        onClick={() => setShareType("social")}
                                        className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-200"
                                    >
                                        Share on Social Media
                                    </button>
                                </>
                            )}
                            {shareType === "social" && (
                                <>
                                    <button
                                        onClick={() =>
                                            handleShareSocial("facebook")
                                        }
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mr-2"
                                    >
                                        Share on Facebook
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleShareSocial("twitter")
                                        }
                                        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200"
                                    >
                                        Share on Twitter
                                    </button>
                                    {/* Add more buttons for other social media platforms as needed */}
                                    <button
                                        onClick={() => setShareType("link")}
                                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200 ml-2"
                                    >
                                        Back to Link
                                    </button>
                                </>
                            )}
                            <button
                                onClick={closeShareModal}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200 mt-4"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </>
        </>
    );
}
