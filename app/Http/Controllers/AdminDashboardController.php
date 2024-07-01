<?php

namespace App\Http\Controllers;

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

                    // Example data for charts
                    $usersPerMonth = User::selectRaw('COUNT(*) as count, MONTH(created_at) as month')
                        ->groupBy('month')
                        ->get();

                    return Inertia::render('Admin/Home', [
                        'userCount' => $userCount,
                        'trainingCount' => $trainingCount,
                        'recentTrainings' => $recentTrainings,
                        'usersPerMonth' => $usersPerMonth
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
