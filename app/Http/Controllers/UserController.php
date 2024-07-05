<?php

// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{

    public function userlist()
{
    if (Auth::check()) {
        $user = Auth::user();
        $usertype = $user->user_type;

        if ($usertype == 'admin') {
            $users = User::all();
            return Inertia::render('Admin/UserListing', ['users' => $users]);
        } elseif ($usertype == 'hr') {
            $users = User::all();
            return Inertia::render('HR/UserListing', ['users' => $users]);
        } elseif ($usertype == 'department_manager') {
            $departmentId = $user->department_name;
            $users = User::where('department_name', $departmentId)->get();
            return Inertia::render('Manager/Team', ['users' => $users]);
        } else {
            return redirect()->back();
        }
    }
}

    
//  public function team(){
//     $user = Auth::user();

//     $departmentId = $user->department_id;
//     $departmentUsers = User::where('department_id', $departmentId)->get();
//     return Inertia::render('Manager/Team', ['users' => $departmentUsers]);
// //     $users = User::all()->department_name;
//     // return Inertia::render('Manger/Team', ['users' => $users]);


    
// // 
// }
public function inde()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }



    public function index()
    {
       
        $currentUser = Auth::user();
        $users = User::where('id', '!=', $currentUser->id)->get();
        return response()->json([
            'currentUser' => $currentUser,
            'users' => $users,
        ]);
        
    }
    public function unreadMessages()
{
    $users = User::withCount(['messages as unread_count' => function ($query) {
        $query->where('read', false)->where('receiver_id', auth()->id());
    }])->get();

    return response()->json($users);
}
public function destroy(user $user)
    {
        
        $user->delete();
        return redirect()->back()->with('success', 'Payroll record deleted successfully.');
    }
}
