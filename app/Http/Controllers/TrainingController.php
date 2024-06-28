<?php
// app/Http/Controllers/TrainingController.php

namespace App\Http\Controllers;

use App\Models\Training;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingController extends Controller
{
    public function index()
    {
        $trainings = Training::all();
        return Inertia::render('Admin/Training/Index', ['trainings' => $trainings]);
    }

    public function create()
    {
        return Inertia::render('Admin/Training/Create');
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

    public function show(Training $training)
    {
        return Inertia::render('Admin/Training/Show', ['training' => $training]);
    }

    public function edit(Training $training)
    {
        return Inertia::render(' Admin/Training/Edit', ['training' => $training]);
    }

    public function update(Request $request, Training $training)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $training->update($request->all());

        return redirect()->route('trainings.index')->with('success', 'Training updated successfully.');
    }

    public function destroy(Training $training)
    {
        $training->delete();

        return redirect()->route('trainings.index')->with('success', 'Training deleted successfully.');
    }
}

