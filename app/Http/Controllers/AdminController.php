<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::where('approved', false)->get();
        $departments = Department::all();

        return Inertia::render('Admin/Users', [
            'users' => $users,
            'departments' => $departments,
            'pendingUserId' => Session::get('redirect_pending_to_dashboard'),
            'flash' => Session::get('message'),
        ]);
    }
    
  // In AdminController.php

public function approve(Request $request)
{
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'department_name' => 'required|string',
    ]);

    $user = User::findOrFail($request->user_id);
    $user->approved = true;
    $user->department_name = $request->department_name;
    $user->save();




    Session::flash('message', 'User registration approved successfully!');

    return redirect()->route('admin.users')->with('success', 'User approved successfully.');
}
public function deny(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $user = User::findOrFail($request->user_id);
        $user->approved = false;
        // $user->notify(new UserDeniedNotification());
        $user->delete();
        Session::flash('message', 'User registration denied successfully.');

        // return redirect()->route('pending')->with('error', 'User registration denied.');
        return redirect()->route('admin.users');
    }


    public function getNewLeaveRequestsCount()
{
    $newRegisterRequestsCount = User::where('approved', false)->count();
    return response()->json(['count' => $newRegisterRequestsCount]);
}

}