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
            'pay_date' => 'required|date',
        ]);

        $user = User::find($request->user_id);
        $net_salary = $request->base_salary + ($request->bonus ?? 0) - ($request->deductions ?? 0);

        Payroll::create([
            'user_id' => $request->user_id,
            'base_salary' => $request->base_salary,
            'bonus' => $request->bonus,
            'deductions' => $request->deductions,
            'net_salary' => $net_salary,
            'pay_date' => $request->pay_date,
        ]);

        return redirect()->route('payroll.index')->with('success', 'Payroll record created successfully.');
    }
}
