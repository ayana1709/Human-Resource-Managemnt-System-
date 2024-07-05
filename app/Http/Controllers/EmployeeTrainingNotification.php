<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeTrainingNotification extends Controller
{
    //
    public function index()
    {
        // dd();
        // Fetch notifications for the authenticated user
        $notifications = auth()->user()->notifications;

        // Pass notifications to the Inertia view
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;

            switch ($usertype) {
                case 'admin':
        return Inertia::render('Admin/Training/Notification', ['notifications' => $notifications]);
        case 'hr':
            return Inertia::render('HR/Training/Notification', ['notifications' => $notifications]);
            case 'department_manager':
                return Inertia::render('Manager/Training/Notification', ['notifications' => $notifications]);
                case 'employee': 
                return Inertia::render('Employee/Training/Notification', ['notifications' => $notifications]);
                case 'default':
                    return redirect()->back();
             
    }
}

    }}