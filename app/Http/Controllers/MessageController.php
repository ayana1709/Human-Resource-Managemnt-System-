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
            'file' => 'nullable|file',
        ]);
    
        $message = new Message();
        $message->sender_id = auth()->id();
        $message->receiver_id = $request->receiver_id;
        $message->message = $request->message;
    
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('uploads', 'public');
            $message->file_url = '/storage/' . $path;
            $message->file_name = $file->getClientOriginalName();
        }
    
        $message->save();
    
        return response()->json($message, 201);
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

    public function unreadCounts()
    {
        $unreadCounts = Message::where('receiver_id', auth()->id())
            ->where('read_at', null) // Assuming read_at field indicates if message is read
            ->groupBy('sender_id')
            ->selectRaw('sender_id, count(*) as count')
            ->get()
            ->pluck('count', 'sender_id');
    
        return response()->json(['unreadCounts' => $unreadCounts]);
    }
    


    }