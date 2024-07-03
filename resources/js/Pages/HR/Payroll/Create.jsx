import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

const Create = ({ users }) => {
    const { flash } = usePage().props;

    const [form, setForm] = useState({
        user_id: "",
        base_salary: "",
        bonus: "",
        deductions: "",
        taxes: "",
        insurance: "",
        allowances: "",
        other_deductions: "",
        pay_date: "",
        net_salary: "",
    });

    const calculateTaxes = (base_salary) => {
        const salary = parseFloat(base_salary) || 0;
        if (salary <= 600) {
            return 0;
        } else if (salary <= 1650) {
            return (salary - 600) * 0.1;
        } else if (salary <= 3200) {
            return (1650 - 600) * 0.1 + (salary - 1650) * 0.15;
        } else if (salary <= 5250) {
            return (
                (1650 - 600) * 0.1 +
                (3200 - 1650) * 0.15 +
                (salary - 3200) * 0.2
            );
        } else if (salary <= 7800) {
            return (
                (1650 - 600) * 0.1 +
                (3200 - 1650) * 0.15 +
                (5250 - 3200) * 0.2 +
                (salary - 5250) * 0.25
            );
        } else if (salary <= 10900) {
            return (
                (1650 - 600) * 0.1 +
                (3200 - 1650) * 0.15 +
                (5250 - 3200) * 0.2 +
                (7800 - 5250) * 0.25 +
                (salary - 7800) * 0.3
            );
        } else {
            return (
                (1650 - 600) * 0.1 +
                (3200 - 1650) * 0.15 +
                (5250 - 3200) * 0.2 +
                (7800 - 5250) * 0.25 +
                (10900 - 7800) * 0.3 +
                (salary - 10900) * 0.35
            );
        }
    };

    const calculateNetSalary = (form) => {
        const base_salary = parseFloat(form.base_salary) || 0;
        const bonus = parseFloat(form.bonus) || 0;
        const deductions = parseFloat(form.deductions) || 0;
        const taxes = parseFloat(form.taxes) || 0;
        const insurance = parseFloat(form.insurance) || 0;
        const allowances = parseFloat(form.allowances) || 0;
        const other_deductions = parseFloat(form.other_deductions) || 0;
        return (
            base_salary +
            bonus +
            allowances -
            (deductions + taxes + insurance + other_deductions)
        );
    };
    // State for available users
    const [availableUsers, setAvailableUsers] = useState(users);

    // Handle form input changes

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        const { name, value } = e.target;
        setForm((prevForm) => {
            const updatedForm = { ...prevForm, [name]: value };
            if (name === "base_salary") {
                updatedForm.taxes = calculateTaxes(value);
            }
            updatedForm.net_salary = calculateNetSalary(updatedForm);
            return updatedForm;
        });

        // If user_id is selected, remove it from available users
        if (e.target.name === "user_id" && e.target.value) {
            const selectedUserId = e.target.value;
            setAvailableUsers(
                availableUsers.filter((user) => user.id !== selectedUserId)
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("payroll.store"), form);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Payroll</h1>
            {flash.success && (
                <div className="bg-green-500 text-white p-2 mb-4 rounded items-center  ">
                    {flash.success}
                </div>
            )}
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
                        readOnly
                        className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        htmlFor="net_salary"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Net Salary
                    </label>
                    <input
                        type="text"
                        id="net_salary"
                        name="net_salary"
                        value={form.net_salary}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    Create Payroll
                </button>
            </form>
        </div>
    );
};

export default Create;
