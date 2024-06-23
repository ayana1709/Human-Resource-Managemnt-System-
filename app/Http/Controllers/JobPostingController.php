<?php

// app/Http/Controllers/JobPostingController.php
namespace App\Http\Controllers;

use App\Models\JobPosting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobPostingController extends Controller
{
    public function index()
    {
        $postings = JobPosting::with('creator')->get();
        return Inertia::render('Admin/JobPosting/Index', ['postings' => $postings]);
    }

    public function create()
    {
        return Inertia::render('Admin/JobPosting/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'roles' => 'required|string',
            'responsibilities' => 'required|string',
            'qualifications' => 'required|string',
            'skills' => 'required|string',
        ]);

        JobPosting::create([
            'title' => $request->title,
            'description' => $request->description,
            'roles' => $request->roles,
            'responsibilities' => $request->responsibilities,
            'qualifications' => $request->qualifications,
            'skills' => $request->skills,
            'created_by' => auth()->id(),
        ]);

        return redirect()->route('job-postings.index')->with('success', 'Job Posting created successfully.');
    }

    public function show($id)
    {
        $posting = JobPosting::with('creator')->findOrFail($id);
        return Inertia::render('Admin/JobPosting/Show', ['posting' => $posting]);
    }
}
