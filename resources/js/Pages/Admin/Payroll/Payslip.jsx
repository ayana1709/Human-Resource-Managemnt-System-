import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const Payslip = ({ payslip }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payslip</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <div>
                    <strong>Employee:</strong> {payslip.user.name}
                </div>
                <div>
                    <strong>Pay Date:</strong> {payslip.pay_date}
                </div>
                <div>
                    <strong>Base Salary:</strong> {payslip.base_salary}
                </div>
                <div>
                    <strong>Bonus:</strong> {payslip.bonus}
                </div>
                <div>
                    <strong>Deductions:</strong> {payslip.deductions}
                </div>
                <div>
                    <strong>Taxes:</strong> {payslip.taxes}
                </div>
                <div>
                    <strong>Insurance:</strong> {payslip.insurance}
                </div>
                <div>
                    <strong>Allowances:</strong> {payslip.allowances}
                </div>
                <div>
                    <strong>Other Deductions:</strong>{" "}
                    {payslip.other_deductions}
                </div>
                <div>
                    <strong>Net Salary:</strong> {payslip.net_salary}
                </div>
            </div>
        </div>
    );
};

export default Payslip;
