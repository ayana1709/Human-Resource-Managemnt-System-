<?php

namespace App\Http\Controllers;

use App\Models\JobRequisition;
use Illuminate\Http\Request;

class JobRequisitionController extends Controller
{
    public function index()
    {
        $jobRequisitions = JobRequisition::all();
        return inertia('Manager/Job_Requistion/Index', ['jobRequisitions' => $jobRequisitions]);
    }

    public function create()
    {
        return inertia('Manager/Job_Requistion/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'department' => 'required|string|max:255',
        ]);

        JobRequisition::create($request->all());

        return redirect()->route('job-requisitions.index');
    }

    public function show(JobRequisition $jobRequisition)
    {
        return inertia('Admin/Show', ['jobRequisition' => $jobRequisition]);
    }

    public function edit(JobRequisition $jobRequisition)
    {
        return inertia('Manager/Job_Requistion/Edit', ['jobRequisition' => $jobRequisition]);
    }

    public function update(Request $request, JobRequisition $jobRequisition)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'department' => 'required|string|max:255',
        ]);

        $jobRequisition->update($request->all());

        return redirect()->route('job-requisitions.index');
    }

    public function destroy(JobRequisition $jobRequisition)
    {
        $jobRequisition->delete();

        return redirect()->route('job-requisitions.index');
    }
}
