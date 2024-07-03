import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import axios from "axios";

const Reports = () => {
    const [data, setData] = useState({
        totalBaseSalary: 0,
        totalBonus: 0,
        totalDeductions: 0,
        totalNetSalary: 0,
        payrolls: [],
    });

    useEffect(() => {
        axios
            .get(route("payroll.reports.data")) // Use the new route name
            .then((response) => {
                console.log("Response Data:", response.data); // Debug log
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching payroll reports:", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payroll Reports</h1>
            <div className="flex justify-between mb-4">
                <InertiaLink
                    href={route("payroll.index")}
                    className="bg-green-500 text-white px-4 py-2 rounded inline-block"
                >
                    Back to Payroll
                </InertiaLink>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">Summary</h2>
                    <p>Total Base Salary: {data.totalBaseSalary}</p>
                    <p>Total Bonus: {data.totalBonus}</p>
                    <p>Total Deductions: {data.totalDeductions}</p>
                    <p>Total Net Salary: {data.totalNetSalary}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">Details</h2>
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
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.isArray(data.payrolls) &&
                                data.payrolls.map((payroll) => (
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
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
