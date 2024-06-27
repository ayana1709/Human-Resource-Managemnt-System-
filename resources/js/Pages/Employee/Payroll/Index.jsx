import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ payrolls }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Payroll Records</h1>
            <InertiaLink
                href={route("dashboard")}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
            >
                Back to Dashboard
            </InertiaLink>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {payrolls.map((payroll) => (
                        <tr key={payroll.id}>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
