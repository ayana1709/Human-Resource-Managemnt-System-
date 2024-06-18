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

    public function approve(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'department_id' => 'required|exists:departments,id',
        ]);

        $user = User::findOrFail($request->user_id);
        $user->approved = true;
        $user->department_id = $request->department_id;
        $user->save();

        return redirect()->route('admin.users')->with('success', 'User approved successfully.');
    }
}
