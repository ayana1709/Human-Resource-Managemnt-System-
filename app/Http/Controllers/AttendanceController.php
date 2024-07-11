<?php

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
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;
            if($usertype=='department_manager'){
        return Inertia::render('Manager/Attendance/Create');


            }else if($usertype=='employee'){
                return Inertia::render('Employee/Attendance/Create');


            }else if($usertype=='hr'){
                return Inertia::render('HR/Attendance/Create');


            }else{
                return redirect()->back();
            }

        }
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
            // return response()->json(['error' => 'Attendance record already exists for this date.'], 409);
        return redirect()->route('attendance.create')->with('error', 'Attendance record already exists for this date.', 409);
        }
        // Create new attendance record
        $attendance = new Attendance();
        $attendance->user_id = auth()->id(); // Assuming the user is authenticated
        $attendance->date = $validatedData['date'];
        $attendance->check_in = $validatedData['check_in_time'];
        $attendance->check_out = $validatedData['check_out_time'];
        $attendance->save();
        // return response()->json(['success' => 'Attendance filled successfully']);
        // $admin = User::user_type('admin');
        // $admin->notify(new AttendanceFilled($attendance));
        return redirect()->route('attendance.create')->with('success', 'Attendance filled successfully');
        // return redirect()->back()->with('success', 'Attendance filled successfully');
    }



    public function inde()
    {
        $attendances = Attendance::with('user')->get();
        return response()->json(['attendances' => $attendances]);
    }



    // Admin checks attendance
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;
    
            if ($usertype == 'hr') {
                $attendances = Attendance::with('user')->get();
                return Inertia::render('HR/Attendance/Index', ['attendances' => $attendances]);
            } elseif ($usertype == 'department_manager') {
                $departmentName = $user->department_name;
                $attendances = Attendance::where('department_name', $departmentName)
                    ->with('user')
                    ->get();
                return Inertia::render('Manager/Attendance/Index', ['attendances' => $attendances]);
            } else {
                return redirect()->back();
            }
        }
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
