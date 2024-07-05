<?php

// app/Http/Controllers/TrainingController.php

namespace App\Http\Controllers;

use App\Models\Training;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Notifications\TrainingAssigned;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;


class TrainingController extends Controller
{
    public function index()
{
    $trainings = Training::with('users')->get();
    if (Auth::check()) {
        $user = Auth::user();
        $usertype = $user->user_type;
        if($usertype == 'admin'){
            return Inertia::render('Admin/Training/Index', ['trainings' => $trainings]);
        } else if($usertype == 'hr'){
            return Inertia::render('HR/Training/Index', ['trainings' => $trainings]);
         } else if($usertype == 'department_manager'){
            $managerTrainings = Training::with('users')->where('created_by', $user->id)->get();
            return Inertia::render('Manager/Training/Index', ['trainings' => $managerTrainings]);
        }  else {
            return redirect()->back();
        }
    }
}


    public function create()
    {
        $users = User::all();
        return Inertia::render('Admin/Training/Create', ['users' => $users]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'users' => 'array',
            'users.*' => 'exists:users,id',
        ]);
    
        $training = Training::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'created_by' => Auth::id(),
        ]);
    
        $training->users()->sync($request->input('users', []));
    
        if ($request->has('users')) {
            $users = User::whereIn('id', $request->users)->get();
            foreach ($users as $user) {
                $user->notify(new TrainingAssigned($training));
            }
        }
    
        return redirect()->route('trainings.index')->with('success', 'Training created successfully.');
    }
    

    



public function show(Training $training)
{
    $training->load('users'); // Eager load the users relationship
    return Inertia::render('Admin/Training/Show', ['training' => $training]);
}


public function edit(Training $training)
{
    $training->load('users');
    $users = User::all(); // Fetch users to select participants
    return Inertia::render('Admin/Training/Edit', ['training' => $training, 'users' => $users]);
}

public function update(Request $request, Training $training)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'users' => 'required|array',
    ]);

    $training->update($request->all());
    $training->users()->sync($request->users); // Update the users attached to the training

    return redirect()->route('trainings.index')->with('success', 'Training updated successfully.');
}

public function destroy(Training $training)
{
    $training->delete();

    return redirect()->route('trainings.index')->with('success', 'Training deleted successfully.');
}
}
