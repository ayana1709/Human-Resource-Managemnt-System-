import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";

const Index = ({ payrolls, filters }) => {
    const { flash } = usePage().props;
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this payroll record?")) {
            Inertia.delete(route("payroll.destroy", id));
        }
    };

    const [search, setSearch] = useState(filters.search || "");

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(route("payroll.index"), {
            search,
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payroll Records</h1>

            <div className="flex justify-between items-center mb-4">
                <InertiaLink
                    href={route("payroll.create")}
                    className="bg-green-500 text-white px-4 py-2 rounded inline-block"
                >
                    Create Payroll
                </InertiaLink>
                <InertiaLink
                    href={route("payroll.reports")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    View Payroll Reports
                </InertiaLink>

                <form onSubmit={handleSearch} className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="mt-1 block px-3 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-auto"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Search
                    </button>
                </form>
            </div>

            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Employee
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Department
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Base Salary
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bonus
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deductions
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Net Salary
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pay Date
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {payrolls.map((payroll) => (
                        <tr key={payroll.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.user.department_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.base_salary}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.bonus}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.deductions}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.net_salary}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {payroll.pay_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <InertiaLink
                                    href={route("payroll.show", payroll.id)}
                                    className="text-blue-600 hover:text-blue-900 mr-2"
                                >
                                    View
                                </InertiaLink>
                                <InertiaLink
                                    href={route("payroll.edit", payroll.id)}
                                    className="text-yellow-600 hover:text-yellow-900 mr-2"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    onClick={() => handleDelete(payroll.id)}
                                    className="text-red-600 hover:text-red-900 mr-2"
                                >
                                    Delete
                                </button>
                                <InertiaLink
                                    href={route("payslips.show", payroll.id)}
                                    className="text-green-600 hover:text-green-900 mr-2"
                                >
                                    Payslip
                                </InertiaLink>
                                <InertiaLink
                                    href={route(
                                        "payslips.download",
                                        payroll.id
                                    )}
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    Download PDF
                                </InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {flash.success && (
                <div className="bg-green-500 text-white p-2 mb-4 rounded items-center  ">
                    {flash.success}
                </div>
            )}
        </div>
    );
};

export default Index;
