<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Payroll;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Payslip;
use Barryvdh\DomPDF\Facade as PDF;
use Barryvdh\DomPDF\PDF as DomPDFPDF;

class PayrollController extends Controller
{
    public function index()
    {
        $payrolls = Payroll::with('user')->get();
        return Inertia::render('Admin/Payroll/Index', ['payrolls' => $payrolls]);
    }

    public function create()
    {
        $users = User::all();
        return Inertia::render('Admin/Payroll/Create', ['users' => $users]);
    }

    

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'base_salary' => 'required|numeric',
            'bonus' => 'nullable|numeric',
            'deductions' => 'nullable|numeric',
            'taxes' => 'required|numeric',
            'insurance' => 'nullable|numeric',
            'allowances' => 'nullable|numeric',
            'other_deductions' => 'nullable|numeric',
            'pay_date' => 'required|date',
        ]);
    
        $data['net_salary'] = $data['base_salary'] + ($data['bonus'] ?? 0) + ($data['allowances'] ?? 0) - ($data['deductions'] ?? 0) - $data['taxes'] - ($data['insurance'] ?? 0) - ($data['other_deductions'] ?? 0);
    
        $payslip = Payslip::create($data);
    
        return redirect()->route('payroll.index')->with('success', 'Payroll created successfully');
    }
    
   
    
   
    

    public function show(Payroll $payroll)
    {
        return Inertia::render('Admin/Payroll/Show', ['payroll' => $payroll->load('user')]);
    }

    
    public function showpayslip($id)
{  
    $payslip = Payslip::findOrFail($id);
    return Inertia::render('Admin/Payroll/Payslip', [
        'payslip' => $payslip->load('user')
    ]);
}




    public function edit(Payroll $payroll)
    {
        $users = User::all();
        return Inertia::render('Admin/Payroll/Edit', ['payroll' => $payroll, 'users' => $users]);
    }

    public function update(Request $request, Payroll $payroll)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'base_salary' => 'required|numeric',
            'bonus' => 'nullable|numeric',
            'deductions' => 'nullable|numeric',
            'insurance' => 'nullable|numeric',
            'allowances' => 'nullable|numeric',
            'other_deductions' => 'nullable|numeric',
            'pay_date' => 'required|date',
        ]);
    
        $payroll->fill($request->all());
        $payroll->taxes = $payroll->calculateTaxes($request->base_salary);
        $payroll->net_salary = $payroll->calculateNetSalary();
        $payroll->save();
    
        return redirect()->route('payroll.index')->with('success', 'Payroll record updated successfully.');
    }
    

    public function destroy(Payroll $payroll)
    {
        $payroll->delete();
        return redirect()->route('payroll.index')->with('success', 'Payroll record deleted successfully.');
    }
 

public function downloadPayslip($id)
{
    $payslip = Payslip::findOrFail($id);
    $pdf = PDF::loadView('resources/views/payslip_pdf', compact('payslip'));
    return $pdf->download('payslip.pdf');
}
}
