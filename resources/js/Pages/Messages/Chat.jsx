import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = ({ selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (selectedUser) {
            axios
                .get(route("messages.show", selectedUser.id))
                .then((response) => setMessages(response.data))
                .catch((error) =>
                    console.error("Error fetching messages:", error)
                );
        }
    }, [selectedUser]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        axios
            .post(route("messages.store"), {
                receiver_id: selectedUser.id,
                message: newMessage,
            })
            .then((response) => {
                setMessages([...messages, response.data]);
                setNewMessage("");
            })
            .catch((error) => console.error("Error sending message:", error));
    };

    if (!selectedUser) {
        return (
            <div className="w-full p-4">Select a user to start chatting</div>
        );
    }

    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex-grow p-4">
                <h2 className="text-lg font-bold mb-4">
                    Chat with {selectedUser.name}
                </h2>
                <div
                    className="flex flex-col-reverse space-y-4"
                    style={{ maxHeight: "70vh", overflowY: "auto" }}
                >
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded ${
                                msg.sender_id === selectedUser.id
                                    ? "bg-gray-100 text-left self-start"
                                    : "bg-blue-100 text-right self-end"
                            }`}
                        >
                            <strong>
                                {msg.sender_id === selectedUser.id
                                    ? selectedUser.name
                                    : "You"}
                                :
                            </strong>{" "}
                            {msg.message}
                        </div>
                    ))}
                </div>
            </div>
            <form
                onSubmit={handleSendMessage}
                className="bg-white p-4 flex items-center w-full"
            >
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-2 border rounded mr-2 w-full"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;
