<?php

namespace App\Http\Controllers;

use App\Models\Shift;
use Illuminate\Http\Request;

class ShiftController extends Controller
{
    public function index()
    {
        $shifts = Shift::all();
        return inertia('HR/Shifts/Index', compact('shifts'));
    }
    public function edit(Shift $shift)
    {
        return inertia('HR/Shifts/Edit', ['shift' => $shift]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);

        Shift::create($validated);

        return redirect()->back()->with('success', 'Shift created successfully.');
    }

    public function update(Request $request, Shift $shift)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);

        $shift->update($validated);

        return redirect()->back()->with('success', 'Shift updated successfully.');
    }

    public function destroy(Shift $shift)
    {
        $shift->delete();
        return redirect()->back()->with('success', 'Shift deleted successfully.');
    }
}
