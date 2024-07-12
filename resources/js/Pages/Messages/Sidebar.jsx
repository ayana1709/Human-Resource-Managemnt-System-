import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({ onUserSelect }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [unreadCounts, setUnreadCounts] = useState({});

    useEffect(() => {
        axios
            .get(route("users.index"))
            .then((response) => {
                setCurrentUser(response.data.currentUser);
                setUsers(response.data.users);
            })
            .catch((error) => console.error("Error fetching users:", error));

        axios
            .get(route("messages.unread_counts"))
            .then((response) => {
                setUnreadCounts(response.data.unreadCounts);
            })
            .catch((error) =>
                console.error("Error fetching unread counts:", error)
            );
    }, []);

    return (
        <div className="w-1/4 bg-gray-200 p-4 h-screen overflow-hidden">
            {currentUser && (
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Profile</h2>
                    <div className="bg-white p-2 rounded shadow">
                        <p>{currentUser.name}</p>
                        <p>{currentUser.email}</p>
                    </div>
                </div>
            )}
            <h2 className="text-lg font-bold mb-4">Users</h2>
            <div className="overflow-y-visible h-full">
                <ul>
                    {Array.isArray(users) &&
                        users.map((user) => (
                            <li key={user.id} className="mb-2">
                                <button
                                    className="w-full text-left p-2 bg-white rounded shadow relative"
                                    onClick={() => onUserSelect(user)}
                                >
                                    {user.name}
                                    {unreadCounts[user.id] > 0 && (
                                        <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center">
                                            {unreadCounts[user.id]}
                                        </span>
                                    )}
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
