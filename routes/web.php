<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\CalendarEventController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



// Route::get('/dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
Route::get('/admin/users', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('Admin.index');


//Attendance
Route::middleware(['auth', 'verified'])->group(function () {
    // Employee routes
    Route::get('/attendance/create', [AttendanceController::class, 'create'])->name('attendance.create');
    Route::post('/attendance/store', [AttendanceController::class, 'store'])->name('attendance.store');
    
    // Admin routes
    Route::get('/admin/attendance', [AttendanceController::class, 'index'])->name('attendance.index');
});


//Leave
Route::middleware(['auth', 'verified'])->group(function () {
    // Employee routes
    Route::get('/leave/create', [LeaveController::class, 'create'])->name('leave.create');
    Route::post('/leave/store', [LeaveController::class, 'store'])->name('leave.store');
    
    //show
    Route::get('/leave/{id}', [LeaveController::class, 'show'])->name('leave.show');

    // Admin routes
    Route::get('/admin/leave', [LeaveController::class, 'index'])->name('leave.index');
    Route::patch('/admin/leave/{leave}', [LeaveController::class, 'update'])->name('leave.update');
});

// routes/web.php

Route::middleware(['auth'])->group(function () {
    // Display the calendar with all events
    Route::get('/calendarevents', [CalendarEventController::class, 'index'])->name('calendar-events.index');
    
    // Display form to create a new event
    Route::get('/calendar-events/create', [CalendarEventController::class, 'create'])->name('calendar-events.create');
    
    // Store the new event
    Route::post('/calendar-events', [CalendarEventController::class, 'store'])->name('calendar-events.store');
    
    // Display form to edit an event
    Route::get('/calendar-events/{calendarEvent}/edit', [CalendarEventController::class, 'edit'])->name('calendar-events.edit');
    
    // Update the event
    Route::put('/calendar-events/{calendarEvent}', [CalendarEventController::class, 'update'])->name('calendar-events.update');
    
    // Delete the event
    Route::delete('/calendar-events/{calendarEvent}', [CalendarEventController::class, 'destroy'])->name('calendar-events.destroy');
});

















Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




require __DIR__.'/auth.php';
