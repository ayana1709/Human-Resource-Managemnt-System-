<?php

// app/Http/Controllers/JobPostingController.php
namespace App\Http\Controllers;

use App\Models\JobPosting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

   // app/Http/Controllers/JobPostingController.php

public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'roles' => 'required|string',
        'responsibilities' => 'required|string',
        'qualifications' => 'required|string',
        'skills' => 'required|string',
        'platforms' => 'required|array',
        'platforms.careerPage' => 'boolean',
        'platforms.jobBoards' => 'boolean',
        'platforms.socialMedia' => 'boolean',
        'platforms.recruitmentAgencies' => 'boolean',
        // 'created_by' => auth()->id(),
    ]);

    // Create the job posting
    $jobPosting = JobPosting::create([
        'title' => $validated['title'],
        'description' => $validated['description'],
        'roles' => $validated['roles'],
        'responsibilities' => $validated['responsibilities'],
        'qualifications' => $validated['qualifications'],
        'skills' => $validated['skills'],
        'created_by' => Auth::id(),
    ]);

    // Handle distribution to platforms
    if ($validated['platforms']['careerPage']) {
        // Logic to post to career page
    }
    if ($validated['platforms']['jobBoards']) {
        // Logic to post to job boards
    }
    if ($validated['platforms']['socialMedia']) {
        // Logic to post to social media
    }
    if ($validated['platforms']['recruitmentAgencies']) {
        // Logic to post to recruitment agencies
    }

    return redirect()->route('job-postings.index')->with('success', 'Job posting created successfully!');
}

    
    
    public function show($id)
    {
        $posting = JobPosting::with('creator')->findOrFail($id);
        return Inertia::render('Admin/JobPosting/Show', ['posting' => $posting]);
    }
}
