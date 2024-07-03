<?php

// app/Http/Controllers/JobPostingController.php
namespace App\Http\Controllers;

use App\Models\JobApplication;
use App\Models\JobPosting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JobPostingController extends Controller
{
    public function index()
    {
        $postings = JobPosting::with('creator')->get();
        return Inertia::render('HR/JobPosting/Index', ['postings' => $postings]);
    }

    public function create()
    {
        return Inertia::render('HR/JobPosting/Create');
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
       ]);
   
       // Create the job posting
       $jobPosting = JobPosting::create([
           'title' => $validated['title'],
           'description' => $validated['description'],
           'roles' => $validated['roles'],
           'responsibilities' => $validated['responsibilities'],
           'qualifications' => $validated['qualifications'],
           'skills' => $validated['skills'],
           'created_by' => auth()->id(),
       ]);
   
       return redirect()->route('job-postings.index')->with('success', 'Job posting created successfully!');
   }
   





    
    
    public function show($id)
    {
        $posting = JobPosting::with('creator')->findOrFail($id);
        return Inertia::render('HR/JobPosting/Show', ['posting' => $posting]);
    }
    public function showCards()
{
    
    $postings = JobPosting::all();

    return Inertia::render('HR/JobPosting/JobPostingCards', [
        'postings' => $postings,
        'auth' => auth()->user(),
    ]);
}


public function apply(Request $request, $id)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'resume' => 'required|file|mimes:pdf|max:2048',
        'cover_letter' => 'nullable|string',
    ]);

    // Save the resume file
    if ($request->hasFile('resume')) {
        $path = $request->file('resume')->store('resumes', 'public');
        $validatedData['resume'] = $path;
    }

    // Save the application
    $validatedData['job_posting_id'] = $id;
    JobApplication::create($validatedData);

    return redirect()->back()->with('success', 'Application submitted successfully.');
}

public function showApplyForm($id)
    {
        $jobPosting = JobPosting::find($id);
        return inertia('HR/JobPosting/JobApplicationForm', ['jobPosting' => $jobPosting,
    'postingId' => $id
    
    ]);
    }
    public function viewApplications($id)
{
    $jobPosting = JobPosting::findOrFail($id);
    $applications = JobApplication::where('job_posting_id', $id)->get();

    return Inertia::render('HR/JobPosting/JobApplications', [
        'jobPosting' => $jobPosting,
        'applications' => $applications,
    ]);
}

    
}
