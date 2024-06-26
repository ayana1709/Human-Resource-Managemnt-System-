import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ payrolls }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payroll Records</h1>
            <InertiaLink
                href={route("payroll.create")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Create Payroll
            </InertiaLink>
            <table className="min-w-full mt-4">
                <thead>
                    <tr>
                        <th className="py-2">Employee</th>
                        <th className="py-2">Base Salary</th>
                        <th className="py-2">Bonus</th>
                        <th className="py-2">Deductions</th>
                        <th className="py-2">Net Salary</th>
                        <th className="py-2">Pay Date</th>
                    </tr>
                </thead>
                <tbody>
                    {payrolls.map((payroll) => (
                        <tr key={payroll.id}>
                            <td className="py-2">{payroll.user.name}</td>
                            <td className="py-2">{payroll.base_salary}</td>
                            <td className="py-2">{payroll.bonus}</td>
                            <td className="py-2">{payroll.deductions}</td>
                            <td className="py-2">{payroll.net_salary}</td>
                            <td className="py-2">{payroll.pay_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
