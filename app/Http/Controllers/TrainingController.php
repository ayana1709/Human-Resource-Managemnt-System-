<?php
// app/Http/Controllers/TrainingController.php


namespace App\Http\Controllers;

use App\Models\Training;
use App\Models\User;
use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function index()
    {
        $trainings = Training::with('users')->get();
        return inertia('Trainings/Index', compact('trainings'));
    }

    public function create()
    {
        return inertia('Trainings/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        Training::create($request->all());

        return redirect()->route('trainings.index')->with('success', 'Training created successfully.');
    }

    public function assignUser(Request $request, Training $training)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $training->users()->attach($request->user_id);

        // Send notification logic here

        return redirect()->route('trainings.index')->with('success', 'User assigned to training successfully.');
    }
}
