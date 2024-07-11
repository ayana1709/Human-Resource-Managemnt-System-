<?php


namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $notifications = Auth::user()->notifications;

        return Inertia::render('Dashboard', [
            'notifications' => $notifications,
        ]);
    }
}
