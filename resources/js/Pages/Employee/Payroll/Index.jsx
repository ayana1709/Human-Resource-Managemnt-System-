import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";

const Index = ({ payrolls, auth }) => {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <EmployeeSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="container mx-auto p-4">
                                <h1 className="text-2xl font-bold mb-4">
                                    My Payroll Records
                                </h1>
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
                                                ID
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
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {payrolls.map((payroll) => (
                                            <tr key={payroll.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {payroll.id}
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
                                                    <div className="flex space-x-2">
                                                        {" "}
                                                        <InertiaLink
                                                            href={route(
                                                                "payslips.show",
                                                                payroll.id
                                                            )}
                                                            className="bg-green-500 hover:text-white px-3 py-2 rounded mr-1"
                                                        >
                                                            Payslip
                                                        </InertiaLink>{" "}
                                                        <InertiaLink
                                                            href={route(
                                                                "payslips.download",
                                                                payroll.id
                                                            )}
                                                            className="bg-blue-500 text-white px-2 py-2 rounded mr-1"
                                                        >
                                                            Download
                                                        </InertiaLink>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
