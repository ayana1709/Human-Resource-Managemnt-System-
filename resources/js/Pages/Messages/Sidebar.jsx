import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({ onUserSelect }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(route("users.index"))
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="w-1/4 bg-gray-200 p-4">
            <h2 className="text-lg font-bold mb-4">Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        <button
                            className="w-full text-left p-2 bg-white rounded shadow"
                            onClick={() => onUserSelect(user)}
                        >
                            {user.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
