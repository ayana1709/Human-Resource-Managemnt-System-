import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({ onUserSelect }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(route("users.index"))
            .then((response) => {
                console.log("Users response:", response.data); // Log the response
                setCurrentUser(response.data.currentUser); // Set the current user state
                setUsers(response.data.users); // Set the users state
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="w-1/4 bg-gray-200 p-4">
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
            <ul>
                {Array.isArray(users) &&
                    users.map(
                        (
                            user // Ensure users is an array before mapping
                        ) => (
                            <li key={user.id} className="mb-2">
                                <button
                                    className="w-full text-left p-2 bg-white rounded shadow"
                                    onClick={() => onUserSelect(user)}
                                >
                                    {user.name}
                                </button>
                            </li>
                        )
                    )}
            </ul>
        </div>
    );
};

export default Sidebar;
