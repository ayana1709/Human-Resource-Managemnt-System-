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
    <p><strong>Employee:</strong> {{ $payslip->user->name }}</p>
    <p><strong>Pay Date:</strong> {{ $payslip->pay_date }}</p>
    <p><strong>Base Salary:</strong> {{ $payslip->base_salary }}</p>
    <p><strong>Bonus:</strong> {{ $payslip->bonus }}</p>
    <p><strong>Deductions:</strong> {{ $payslip->deductions }}</p>
    <p><strong>Taxes:</strong> {{ $payslip->taxes }}</p>
    <p><strong>Insurance:</strong> {{ $payslip->insurance }}</p>
    <p><strong>Allowances:</strong> {{ $payslip->allowances }}</p>
    <p><strong>Other Deductions:</strong> {{ $payslip->other_deductions }}</p>
    <p><strong>Net Salary:</strong> {{ $payslip->net_salary }}</p>
</body>
</html>
