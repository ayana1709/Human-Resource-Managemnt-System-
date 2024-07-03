import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ payroll, users }) => {
    const [form, setForm] = useState({
        user_id: payroll.user_id,
        base_salary: payroll.base_salary,
        bonus: payroll.bonus,
        deductions: payroll.deductions,
        taxes: payroll.taxes,
        insurance: payroll.insurance,
        allowances: payroll.allowances,
        other_deductions: payroll.other_deductions,
        pay_date: payroll.pay_date,
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(route("payroll.update", payroll.id), form);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Payroll</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="user_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Employee
                    </label>
                    <select
                        id="user_id"
                        name="user_id"
                        value={form.user_id}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Employee</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="base_salary"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Base Salary
                    </label>
                    <input
                        type="text"
                        id="base_salary"
                        name="base_salary"
                        value={form.base_salary}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="bonus"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Bonus
                    </label>
                    <input
                        type="text"
                        id="bonus"
                        name="bonus"
                        value={form.bonus}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="deductions"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Deductions
                    </label>
                    <input
                        type="text"
                        id="deductions"
                        name="deductions"
                        value={form.deductions}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="taxes"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Taxes
                    </label>
                    <input
                        type="text"
                        id="taxes"
                        name="taxes"
                        value={form.taxes}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="insurance"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Insurance
                    </label>
                    <input
                        type="text"
                        id="insurance"
                        name="insurance"
                        value={form.insurance}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="allowances"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Allowances
                    </label>
                    <input
                        type="text"
                        id="allowances"
                        name="allowances"
                        value={form.allowances}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="other_deductions"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Other Deductions
                    </label>
                    <input
                        type="text"
                        id="other_deductions"
                        name="other_deductions"
                        value={form.other_deductions}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="pay_date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pay Date
                    </label>
                    <input
                        type="date"
                        id="pay_date"
                        name="pay_date"
                        value={form.pay_date}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Update Payroll
                </button>
            </form>
        </div>
    );
};

export default Edit;
