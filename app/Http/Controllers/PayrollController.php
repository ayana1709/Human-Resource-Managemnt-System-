<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Payroll;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'base_salary' => 'required|numeric',
            'bonus' => 'nullable|numeric',
            'deductions' => 'nullable|numeric',
            'taxes' => 'nullable|numeric',
            'insurance' => 'nullable|numeric',
            'allowances' => 'nullable|numeric',
            'other_deductions' => 'nullable|numeric',
            'pay_date' => 'required|date',
        ]);

        $payroll = Payroll::create($request->all());
        $payroll->net_salary = $payroll->calculateNetSalary();
        $payroll->save();

        return redirect()->route('payroll.index')->with('success', 'Payroll record created successfully.');
    }

    public function show(Payroll $payroll)
    {
        return Inertia::render('Admin/Payroll/Show', ['payroll' => $payroll->load('user')]);
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
            'taxes' => 'nullable|numeric',
            'insurance' => 'nullable|numeric',
            'allowances' => 'nullable|numeric',
            'other_deductions' => 'nullable|numeric',
            'pay_date' => 'required|date',
        ]);

        $payroll->update($request->all());
        $payroll->net_salary = $payroll->calculateNetSalary();
        $payroll->save();

        return redirect()->route('payroll.index')->with('success', 'Payroll record updated successfully.');
    }

    public function destroy(Payroll $payroll)
    {
        $payroll->delete();
        return redirect()->route('payroll.index')->with('success', 'Payroll record deleted successfully.');
    }
}
