<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::where('approved', false)->get();
        $departments = Department::all();

        return Inertia::render('Users', [
            'users' => $users,
            'departments' => $departments,
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

        // return redirect()->route('pending')->with('error', 'User registration denied.');
    }

}