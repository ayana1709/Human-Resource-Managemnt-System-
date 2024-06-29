<?php

// app/Http/Controllers/TrainingSessionController.php

namespace App\Http\Controllers;

use App\Models\Training;
use App\Models\TrainingSession;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingSessionController extends Controller
{
    public function create(Training $training)
    {
        return Inertia::render('TrainingSessions/Create', ['training' => $training]);
    }

    public function store(Request $request, Training $training)
    {
        $request->validate([
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'details' => 'required|string',
        ]);

        $training->sessions()->create($request->all());

        return redirect()->route('trainings.show', $training->id)->with('success', 'Session created successfully.');
    }

    public function edit(TrainingSession $session)
    {
        return Inertia::render('TrainingSessions/Edit', ['session' => $session]);
    }

    public function update(Request $request, TrainingSession $session)
    {
        $request->validate([
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'details' => 'required|string',
        ]);

        $session->update($request->all());

        return redirect()->route('trainings.show', $session->training_id)->with('success', 'Session updated successfully.');
    }

    public function destroy(TrainingSession $session)
    {
        $session->delete();

        return redirect()->route('trainings.show', $session->training_id)->with('success', 'Session deleted successfully.');
    }
}
