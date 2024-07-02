<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\JobPosting;
use App\Models\Shift;
use App\Models\Training;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;

            switch ($usertype) {
                case 'admin':
                    // Fetch some example data
                    $userCount = User::count();
                    $trainingCount = Training::count();
                    $recentTrainings = Training::latest()->take(5)->get();
                    $departmnents = Department::count();
                    $shift = Shift::count();
                    $jobs= JobPosting::latest()->take(5)->get();

                    // Example data for charts
                    $usersPerDay = User::selectRaw('COUNT(*) as count, DAY(created_at) as day')
                        ->groupBy('day')
                        ->get();

                    return Inertia::render('Admin/Home', [
                        'userCount' => $userCount,
                        'trainingCount' => $trainingCount,
                        'recentTrainings' => $recentTrainings,
                        'usersPerDay' => $usersPerDay,
                        'departemnts' => $departmnents,
                        'shift'=>  $shift,
                        'jobs'=>$jobs,
                    ]);

                case 'hr':
                    return Inertia::render('HR/Dashboard');

                case 'department_manager':
                    return Inertia::render('Manager/Dashboard');

                case 'employee':
                    return Inertia::render('Employee/Dashboard');

                default:
                    return redirect()->back();
            }
        }
    }
}
