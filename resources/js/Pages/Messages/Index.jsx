import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

const Index = () => {
    const { messages, users } = usePage().props;
    const [message, setMessage] = useState("");
    const [receiverId, setReceiverId] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        Inertia.post(route("messages.store"), {
            receiver_id: receiverId,
            message,
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <form onSubmit={handleSend} className="mb-4">
                <select
                    value={receiverId}
                    onChange={(e) => setReceiverId(e.target.value)}
                    className="border p-2 mr-2"
                    required
                >
                    <option value="">Select a receiver</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 mr-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Send
                </button>
            </form>
            <div className="flex flex-col space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="border p-2 mb-2">
                        <p>
                            <strong>From:</strong> {msg.sender.name}{" "}
                            <strong>To:</strong> {msg.receiver.name}
                        </p>
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
