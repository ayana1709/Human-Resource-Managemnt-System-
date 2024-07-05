<?php

// app/Http/Controllers/LeaveController.php
namespace App\Http\Controllers;

use App\Models\Leave;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
use App\Notifications\LeaveStatusNotification;




class LeaveController extends Controller
{
    // Employee creates leave request
    public function create()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;

              switch ($usertype) {
                case 'department_manager':
                    return Inertia::render('Manager/Leave/Create');
                case 'employee':
                    return Inertia::render('Employee/Leave/Create');
                case 'admin':
                        return Inertia::render('Admin/Leave/Create');   
                 default:
                     return back();   
                }
            }
           

        
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'start_date' => 'required',
            'end_date' => 'required',
            'reason' => 'required|string|max:255',
        ]);


          // Log the request data and validation errors
    Log::info('Leave request data:', $request->all());
    $leave=  Leave::create([
            'user_id' => Auth::id(),
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'reason' => $request->reason,
            'status' => 'pending',
        ]);

        // return redirect()->route('leave.create')->with('success', 'Leave request submitted successfully');
        return redirect()->route('leave.show', $leave->id)->with('success', 'Leave request submitted successfully');
    }

    // Admin views all leave requests
    public function index()
    {
        $leaves = Leave::with('user')->get();
        return Inertia::render('HR/Leave/Index', ['leaves' => $leaves]);
    }

    // Admin approves or denies leave request
   public function update(Request $request, Leave $leave)
   {
       $request->validate([
           'status' => 'required|in:approved,denied',
       ]);

       $leave->update([
           'status' => $request->status,
       ]);

       return redirect()->route('leave.index')->with('success', 'Leave request updated successfully');
   }

    // app/Http/Controllers/LeaveController.php

public function show($id)
{
    $leave = Leave::with('user')->findOrFail($id);


    if (Auth::id() !== $leave->user_id) {
        abort(403);
    }

    return Inertia::render('Employee/Leave/Show', ['leave' => $leave]);
}

public function getNewLeaveRequestsCount()
{
    $newLeaveRequestsCount = Leave::where('status', 'pending')->count();
    return response()->json(['count' => $newLeaveRequestsCount]);
}

}
