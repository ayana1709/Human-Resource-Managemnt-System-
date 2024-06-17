<?php

// app/Http/Controllers/AttendanceController.php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    // Employee fills attendance
    public function create()
    {
        return Inertia::render('Employee/Attendance/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
            'check_in' => 'required|date_format:H:i',
            'check_out' => 'nullable|date_format:H:i|after:check_in',
        ]);

        Attendance::create([
            'user_id' => Auth::id(),
            'date' => $request->date,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
        ]);

        return redirect()->route('attendance.create')->with('success', 'Attendance recorded successfully');
    }

    // Admin checks attendance
    public function index()
    {
        $attendances = Attendance::with('user')->get();
        return Inertia::render('Admin/Attendance/Index', ['attendances' => $attendances]);
    }
}
