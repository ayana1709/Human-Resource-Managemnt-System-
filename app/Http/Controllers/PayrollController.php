<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Payroll;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PayrollController extends Controller
{
    public function index(Request $request)
    {
        $query = Payroll::with('user:id,name,user_type,department_name');


 // Search by name
 if ($request->has('search')) {
    $query->whereHas('user', function ($q) use ($request) {
        $q->where('name', 'like', '%' . $request->search . '%');
    });
}

// Filter by department
if ($request->has('department')) {
    $query->whereHas('user', function ($q) use ($request) {
        $q->where('department_name', $request->department);
    });
}

// Filter by net salary
if ($request->has('net_salary')) {
    $query->where('net_salary', $request->net_salary);
}

$payrolls = $query->get();

return Inertia::render('Admin/Payroll/Index', [
    'payrolls' => $payrolls,
    'filters' => $request->all(),
]);
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
            'insurance' => 'nullable|numeric',
            'allowances' => 'nullable|numeric',
            'other_deductions' => 'nullable|numeric',
            'pay_date' => 'required|date',
        ]);
    
        $payroll = new Payroll($request->all());
        $payroll->taxes = $payroll->calculateTaxes($request->base_salary);
        $payroll->net_salary = $payroll->calculateNetSalary();
        $payroll->save();
    
        return redirect()->route('payroll.index')->with('success', 'Payroll record created successfully.');
    }
    
    public function reports()
    {
        $payrolls = Payroll::with('user')->get();
    
        // Calculate total payroll costs
        $totalBaseSalary = $payrolls->sum('base_salary');
        $totalBonus = $payrolls->sum('bonus');
        $totalDeductions = $payrolls->sum('deductions');
        $totalNetSalary = $payrolls->sum('net_salary');
    
        return response()->json([
            'totalBaseSalary' => $totalBaseSalary,
            'totalBonus' => $totalBonus,
            'totalDeductions' => $totalDeductions,
            'totalNetSalary' => $totalNetSalary,
            'payrolls' => $payrolls,
        ]);
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
   
}
