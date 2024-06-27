<!-- resources/views/payslip_pdf.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Payslip</title>
    <style>
        /* Add your PDF styles here */
    </style>
</head>
<body>
    <h1>Payslip</h1>
    <p><strong>Employee:</strong> {{ $payroll->user->name }}</p>
    <p><strong>Pay Date:</strong> {{ $payroll->pay_date }}</p>
    <p><strong>Base Salary:</strong> {{ $payroll->base_salary }}</p>
    <p><strong>Bonus:</strong> {{ $payroll->bonus }}</p>
    <p><strong>Deductions:</strong> {{ $payroll->deductions }}</p>
    <p><strong>Taxes:</strong> {{ $payroll->taxes }}</p>
    <p><strong>Insurance:</strong> {{ $payroll->insurance }}</p>
    <p><strong>Allowances:</strong> {{ $payroll->allowances }}</p>
    <p><strong>Other Deductions:</strong> {{ $payroll->other_deductions }}</p>
    <p><strong>Net Salary:</strong> {{ $payroll->net_salary }}</p>
</body>
</html>
