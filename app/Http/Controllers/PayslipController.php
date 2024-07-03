<?php

namespace App\Http\Controllers;

use App\Models\Payroll;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;

class PayslipController extends Controller
{
    public function show($id)
    {
        $payroll = Payroll::with('user')->findOrFail($id);
        return Inertia::render('Employee/Payroll/Payslip', [
            'payslip' => $payroll->load('user')
        ]);
    }
    public function download($id)
    {
        $payroll = Payroll::with('user')->findOrFail($id);
        $pdf = PDF::loadView('payslip_pdf', compact('payroll'));
        return $pdf->download('payslip.pdf');
    }
}
