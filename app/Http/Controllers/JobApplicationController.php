<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPosting;
use App\Models\JobApplication;

class JobApplicationController extends Controller
{
    public function create($id)
    {
        $jobPosting = JobPosting::findOrFail($id);
        return inertia('Employee/JobPosting/Create', ['jobPosting' => $jobPosting]);
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $jobPosting = JobPosting::findOrFail($id);
        $resumePath = $request->file('resume')->store('resumes');

        JobApplication::create([
            'job_posting_id' => $jobPosting->id,
            'name' => $request->name,
            'email' => $request->email,
            'resume' => $resumePath,
        ]);

        return redirect()->route('job-postings.index')->with('success', 'Application submitted successfully!');
    }
}
