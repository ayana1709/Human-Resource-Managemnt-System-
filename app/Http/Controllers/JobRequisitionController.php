<?php

// app/Http/Controllers/JobRequisitionController.php
namespace App\Http\Controllers;

use App\Models\JobRequisition;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobRequisitionController extends Controller
{
    public function index()
    {
        $requisitions = JobRequisition::with('requester', 'approver')->get();
        return Inertia::render('HR/Job_Requistion/Index', ['requisitions' => $requisitions]);
    }

    public function create()
    {
        return Inertia::render('Manager/Job_Requistion/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'department' => 'required|string|max:255',
        ]);

        JobRequisition::create([
            'title' => $request->title,
            'description' => $request->description,
            'department' => $request->department,
            'requested_by' => auth()->id(),
        ]);

        return redirect()->back()->with('success', 'Job Requisition created successfully.');
    }

    public function approve($id)
    {
        $requisition = JobRequisition::findOrFail($id);
        $requisition->update([
            'status' => 'approved',
            'approved_by' => auth()->id(),
        ]);

        return redirect()->route('job-requisitions.index')->with('success', 'Job Requisition approved successfully.');
    }
}
