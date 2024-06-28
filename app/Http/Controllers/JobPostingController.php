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
    public function showCards()
{
    
    $postings = JobPosting::all();

    return Inertia::render('Admin/JobPosting/JobPostingCards', [
        'postings' => $postings,
        'auth' => auth()->user(),
    ]);
}
public function apply(Request $request, $id)
{
    $jobPosting = JobPosting::findOrFail($id);

    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'resume' => 'required|file|mimes:pdf|max:2048',
        'cover_letter' => 'required|string|max:1000',
    ]);

    $resumePath = $request->file('resume')->store('resumes', 'public');

    $application = new JobApplication();
    $application->job_posting_id = $jobPosting->id;
    $application->user_id = Auth::id();
    $application->name = $request->input('name');
    $application->email = $request->input('email');
    $application->cover_letter = $request->input('cover_letter');
    $application->resume_path = $resumePath;
    $application->save();

    return redirect()->back()->with('success', 'You have successfully applied for the job.');
}
public function showApplyForm($id)
    {
       
        $jobPosting = JobPosting::find($id);
        return inertia('Admin/JobPosting/JobApplicationForm', ['jobPosting' => $jobPosting]);
    }

    
}
