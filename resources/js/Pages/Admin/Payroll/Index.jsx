import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";

const Index = ({ payrolls, filters, auth }) => {
    const { flash } = usePage().props;
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this payroll record?")) {
            Inertia.delete(route("payroll.destroy", id));
        }
    };

    const [search, setSearch] = useState(filters.search || "");

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(route("payroll.index"), { search });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <AdminSidebar />
                    <main className="flex-1 bg-gray-100">
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-4">
                                Payroll Records
                            </h1>
                            <div className="flex justify-between items-center mb-4">
                                <InertiaLink
                                    href={route("payroll.create")}
                                    className="bg-green-500 text-white px-4 py-2 rounded inline-block hover:bg-green-400 transition"
                                >
                                    Create Payroll
                                </InertiaLink>
                                {/* <InertiaLink
                                    href={route("payroll.reports")}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                                >
                                    View Payroll Reports
                                </InertiaLink> */}
                                <form
                                    onSubmit={handleSearch}
                                    className="flex space-x-2"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search by name"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-400">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Id
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Employee
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Department
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Base Salary
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Bonus
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Deductions
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Net Salary
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Pay Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {payrolls.map((payroll) => (
                                        <tr key={payroll.id}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.id}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.user.name}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.user.department_name}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.base_salary}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.bonus}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.deductions}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.net_salary}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {payroll.pay_date}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2">
                                                    <InertiaLink
                                                        href={route(
                                                            "payroll.show",
                                                            payroll.id
                                                        )}
                                                        className="bg-blue-500 text-white px-2 py-2 rounded mr-1"
                                                    >
                                                        View
                                                    </InertiaLink>

                                                    <InertiaLink
                                                        href={route(
                                                            "payroll.edit",
                                                            payroll.id
                                                        )}
                                                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-1"
                                                    >
                                                        Edit
                                                    </InertiaLink>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                payroll.id
                                                            )
                                                        }
                                                        className="bg-red-500 hover:text-white px-4 py-2 rounded mr-1"
                                                    >
                                                        Delete
                                                    </button>
                                                    <InertiaLink
                                                        href={route(
                                                            "payslips.show",
                                                            payroll.id
                                                        )}
                                                        className="bg-green-500 hover:text-white px-4 py-2 rounded mr-1"
                                                    >
                                                        Payslip
                                                    </InertiaLink>
                                                    {/*  */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <InertiaLink
                                href={route("payslips.download", payroll.id)}
                                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
                            >
                                Download PDF
                            </InertiaLink>
                            {flash.success && (
                                <div className="bg-green-500 text-white p-2 mb-4 rounded items-center">
                                    {flash.success}
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
