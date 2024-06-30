<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User; // example model
use App\Models\Training; // example model

class HomeDashboardController extends Controller
{
    public function index()
    {
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
    }
}





