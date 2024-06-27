import React, { useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Index = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="flex h-screen">
            <Sidebar onUserSelect={setSelectedUser} />
            <Chat selectedUser={selectedUser} />
        </div>
    );
};

export default Index;
