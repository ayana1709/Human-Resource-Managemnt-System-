<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class EmployeeTrainingNotification extends Controller
{
    //
    public function index()
    {
        // dd();
        // Fetch notifications for the authenticated user
        $notifications = auth()->user()->notifications;

        // Pass notifications to the Inertia view
        return Inertia::render('Employee/Training/Notification', ['notifications' => $notifications]);
    }
}

