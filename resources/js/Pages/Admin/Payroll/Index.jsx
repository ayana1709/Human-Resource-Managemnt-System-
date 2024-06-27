import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ payrolls }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this payroll record?")) {
            Inertia.delete(route("payroll.destroy", id));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payroll Records</h1>
            <InertiaLink
                href={route("payroll.create")}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
            >
                Create Payroll
            </InertiaLink>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Employee
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
        </div>
    );
};

export default Index;
