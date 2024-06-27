<?php

// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\Message;
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
        $messages = Message::with('sender', 'receiver')->get(); // Assuming you have a messages table
         return Inertia::render('ChatPage', [
        'auth' => $currentUser,
        'users' => $users,
        'messages' => $messages,
    ]);

  
    

   
    }
}
