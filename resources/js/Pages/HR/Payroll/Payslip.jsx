import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Payslip = ({ payslip, payroll }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payslip</h1>
            <div className="mb-4"></div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-2">
                    <strong>Employee:</strong> {payslip.user.name}
                </div>
                <div className="mb-2">
                    <strong>Pay Date:</strong> {payslip.pay_date}
                </div>
                <div className="mb-2">
                    <strong>Base Salary:</strong> {payslip.base_salary}
                </div>
                <div className="mb-2">
                    <strong>Bonus:</strong> {payslip.bonus}
                </div>
                <div className="mb-2">
                    <strong>Deductions:</strong> {payslip.deductions}
                </div>
                <div className="mb-2">
                    <strong>Taxes:</strong> {payslip.taxes}
                </div>
                <div className="mb-2">
                    <strong>Insurance:</strong> {payslip.insurance}
                </div>
                <div className="mb-2">
                    <strong>Allowances:</strong> {payslip.allowances}
                </div>
                <div className="mb-2">
                    <strong>Other Deductions:</strong>{" "}
                    {payslip.other_deductions}
                </div>
                <div className="mb-2">
                    <strong>Net Salary:</strong> {payslip.net_salary}
                </div>
            </div>
        </div>
    );
};

export default Payslip;
