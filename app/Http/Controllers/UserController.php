<?php

// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        // $users = User::all();
        // return Inertia::render('Admin/UserListing', ['users' => $users]);
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

}
