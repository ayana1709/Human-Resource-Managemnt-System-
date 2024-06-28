<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MessageController extends Controller
{
    public function index()
    {

        $messages = Message::with(['sender', 'receiver'])->get();
        $users = User::all();

        return Inertia::render('Messages/Index', [
            'messages' => $messages,
            'users' => $users,
        ]);
    }

    
    
    
    public function store(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|integer',
            'message' => 'nullable|string',
            'file' => 'nullable|file|mimes:jpg,jpeg,png,gif,mp4,webm,ogg,pdf,doc,docx,xls,xlsx|max:20480' // Adjust max size as needed
        ]);
    
        $message = new Message();
        $message->sender_id = auth()->id();
        $message->receiver_id = $request->receiver_id;
        $message->message = $request->message;
    
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('uploads', 'public');
            $message->file_url = Storage::url($path);
            $message->file_name = $request->file('file')->getClientOriginalName();
        }
    
        $message->save();
    
        return response()->json($message);
    }
    

    




    public function show(User $user)
    {
        return Message::where(function($query) use ($user) {
            $query->where('sender_id', auth()->id())
                ->where('receiver_id', $user->id);
        })->orWhere(function($query) use ($user) {
            $query->where('sender_id', $user->id)
                ->where('receiver_id', auth()->id());
        })->get();
    }

    }