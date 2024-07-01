<?php

// app/Http/Controllers/AttendanceController.php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\User;
use AttendanceFilled;
use Carbon\Carbon;
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
        $validatedData = $request->validate([
            'date' => 'required|date',
            'check_in_time' => 'nullable|string',
            'check_out_time' => 'nullable|string',
        ]);

        // Check if an attendance record already exists for the user and date
        $existingAttendance = Attendance::where('user_id', auth()->id())
                                        ->where('date', $validatedData['date'])
                                        ->first();

        if ($existingAttendance) {
            // If it exists, return a 409 conflict response
            return response()->json(['error' => 'Attendance record already exists for this date.'], 409);
        }

        // Create new attendance record
        $attendance = new Attendance();
        $attendance->user_id = auth()->id(); // Assuming the user is authenticated
        $attendance->date = $validatedData['date'];
        $attendance->check_in = $validatedData['check_in_time'];
        $attendance->check_out = $validatedData['check_out_time'];
        $attendance->save();

        return response()->json(['success' => 'Attendance filled successfully']);
        // $admin = User::user_type('admin');
        // $admin->notify(new AttendanceFilled($attendance));
    
        // return redirect()->back()->with('success', 'Attendance filled successfully');
    }


















    // Admin checks attendance
    public function index()
    {
        $attendances = Attendance::with('user')->get();
        return Inertia::render('Admin/Attendance/Index', ['attendances' => $attendances]);
    }


    
    public function newAttendanceCount()
{
    // $newAttendanceCount = Attendance::where('status', 'pending')->count();
    $newAttendanceCount = Attendance::where('created_at', '>=', Carbon::now()->subDay())->count();

    return response()->json([
        'newAttendanceCount' => $newAttendanceCount,
    ]);
}

}
