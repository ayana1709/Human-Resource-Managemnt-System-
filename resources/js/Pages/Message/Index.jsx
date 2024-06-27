import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

const Index = () => {
    const { messages } = usePage().props;
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
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Receiver ID"
                    value={receiverId}
                    onChange={(e) => setReceiverId(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Send
                </button>
            </form>
            <div className="mt-4">
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
