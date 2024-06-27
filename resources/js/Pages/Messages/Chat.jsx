import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";

const Chat = ({ auth, users, messages }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState(messages || []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        fetchMessages(user.id);
    };

    const fetchMessages = (userId) => {
        axios
            .get(route("messages.index", userId))
            .then((response) => {
                setChatMessages(response.data);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the messages!",
                    error
                );
            });
    };

    const handleSendMessage = () => {
        if (!selectedUser || !message) return;

        axios
            .post(route("messages.store"), {
                receiver_id: selectedUser.id,
                message,
            })
            .then((response) => {
                setChatMessages([...chatMessages, response.data]);
                setMessage("");
            })
            .catch((error) => {
                console.error("There was an error sending the message!", error);
            });
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-200 p-4">
                <div className="mb-4">
                    <div className="font-bold">
                        Logged in as: {auth.user.name}
                    </div>
                </div>
                <div className="overflow-y-auto h-4/5">
                    {users
                        .filter((user) => user.id !== auth.user.id)
                        .map((user) => (
                            <div
                                key={user.id}
                                className={`p-2 cursor-pointer ${
                                    selectedUser && selectedUser.id === user.id
                                        ? "bg-blue-300"
                                        : "bg-white"
                                } hover:bg-blue-100`}
                                onClick={() => handleUserClick(user)}
                            >
                                {user.name}
                            </div>
                        ))}
                </div>
            </div>
            <div className="w-3/4 bg-white flex flex-col">
                <div className="flex-grow p-4 overflow-y-auto">
                    {chatMessages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 ${
                                msg.sender_id === auth.user.id
                                    ? "text-right"
                                    : "text-left"
                            }`}
                        >
                            <div
                                className={`inline-block p-2 rounded-lg ${
                                    msg.sender_id === auth.user.id
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
                                }`}
                            >
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedUser && (
                    <div className="p-4 border-t border-gray-200 flex">
                        <input
                            type="text"
                            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message"
                        />
                        <button
                            className="bg-blue-500 text-white p-2 rounded-r-lg"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
