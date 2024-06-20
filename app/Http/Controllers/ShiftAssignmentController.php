<?php
namespace App\Http\Controllers;

use App\Models\Shift;
use App\Models\ShiftAssignment;
use App\Models\User;
use Illuminate\Http\Request;

class ShiftAssignmentController extends Controller
{
    public function index()
    {
        $shiftAssignments = ShiftAssignment::with('user', 'shift')->get();
        return inertia('Admin/Shifts/ShiftAssignments', compact('shiftAssignments'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'shift_id' => 'required|exists:shifts,id',
            'shift_date' => 'required|date',
        ]);

        ShiftAssignment::create($validated);

        return redirect()->back()->with('success', 'Shift assigned successfully.');
    }

    public function update(Request $request, ShiftAssignment $shiftAssignment)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'shift_id' => 'required|exists:shifts,id',
            'shift_date' => 'required|date',
        ]);

        $shiftAssignment->update($validated);

        return redirect()->back()->with('success', 'Shift assignment updated successfully.');
    }

    public function destroy(ShiftAssignment $shiftAssignment)
    {
        $shiftAssignment->delete();
        return redirect()->back()->with('success', 'Shift assignment deleted successfully.');
    }
}
