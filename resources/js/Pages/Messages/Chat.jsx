import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chat = ({ selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (selectedUser) {
            axios
                .get(route("messages.show", selectedUser.id))
                .then((response) => {
                    setMessages(response.data);
                    scrollToBottom();
                })
                .catch((error) =>
                    console.error("Error fetching messages:", error)
                );
        }
    }, [selectedUser]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("receiver_id", selectedUser.id);
        formData.append("message", newMessage.trim());
        if (selectedFile) {
            formData.append("file", selectedFile);
        }

        axios
            .post(route("messages.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                setMessages([...messages, response.data]);
                setNewMessage("");
                setSelectedFile(null);
                scrollToBottom();
            })
            .catch((error) => console.error("Error sending message:", error));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    };

    const renderMessageContent = (msg) => {
        if (msg.file_url) {
            const fileType = msg.file_url.split(".").pop().toLowerCase();
            if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
                return (
                    <img
                        src={msg.file_url}
                        alt="uploaded"
                        className="max-w-full max-h-64 rounded"
                    />
                );
            } else if (["mp4", "webm", "ogg"].includes(fileType)) {
                return (
                    <video
                        src={msg.file_url}
                        controls
                        className="max-w-full max-h-64 rounded"
                    />
                );
            } else {
                return (
                    <a
                        href={msg.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        {msg.file_name}
                    </a>
                );
            }
        }
        return msg.message;
    };

    if (!selectedUser) {
        return <div className="w-3/4 p-4">Select a user to start chatting</div>;
    }

    return (
        <div className="flex flex-col h-screen w-full relative">
            <div className="flex-grow p-4">
                <h2 className="text-lg font-bold mb-4">
                    Chat with {selectedUser.name}
                </h2>
                <div
                    className="bg-white p-4 rounded shadow mb-4"
                    style={{ maxHeight: "75vh", overflowY: "auto" }}
                    ref={chatContainerRef}
                >
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-2 rounded ${
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
                            {renderMessageContent(msg)}
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
                    className="flex-1 p-2 border rounded mr-2"
                    placeholder="Type your message..."
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="p-2 border rounded mr-2"
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
