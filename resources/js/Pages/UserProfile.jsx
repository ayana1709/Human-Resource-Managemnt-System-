import { usePage } from "@inertiajs/react";

export default function UserProfile() {
    const user = usePage().props.auth.user;

    return (
        <div className="flex items-center">
            <img
                src={
                    user.profile_picture
                        ? `/storage/${user.profile_picture}`
                        : "default-profile-picture.jpg"
                }
                alt="Profile Picture"
                className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-900">
                    {user.name}
                </h2>
                <p className="text-sm text-gray-600">{user.email}</p>
            </div>
        </div>
    );
}
