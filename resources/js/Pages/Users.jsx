import React from 'react';
import { Head, usePage } from '@inertiajs/react';

export default function Users() {
    const { users, departments } = usePage().props;

    return (
        <div className="container mx-auto">
            <Head title="Admin - Approve Users" />
            <h1 className="text-2xl font-bold my-8">Approve Users</h1>

            <div>
                {users.map(user => (
                    <div key={user.id} className="my-4 p-4 border rounded">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <form method="POST" action="/admin/users/approve">
                            <input type="hidden" name="_token" value={csrfToken} />
                            <input type="hidden" name="user_id" value={user.id} />
                            <select name="department_id" required>
                                <option value="">Select Department</option>
                                {departments.map(dept => (
                                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                                ))}
                            </select>
                            <button type="submit" className="btn btn-primary">Approve</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}
