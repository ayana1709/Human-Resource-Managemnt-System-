<?php
use App\Models\User;
use Inertia\Inertia;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\CalendarEventController;
use App\Http\Controllers\EmployeeTrainingNotification;
use App\Http\Controllers\HomeDashboardController;
use App\Http\Controllers\PendingController;
use App\Http\Controllers\ShiftController;
use App\Http\Controllers\ShiftAssignmentController;
use App\Http\Controllers\JobRequisitionController;
use App\Http\Controllers\JobPostingController;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\PayrollController;
use App\Http\Controllers\PayslipController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\TrainingSessionController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|

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



Route::middleware('auth')->group(function () {

    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




require __DIR__.'/auth.php';
require __DIR__.'/auth.php';
require __DIR__.'/auth.php';
require __DIR__.'/auth.php';
require __DIR__.'/auth.php';


Route::get('/pending', function () {
    return Inertia::render('Pending');
})->name('pending');



//approvement

Route::middleware(['auth', 'hr'])->group(function () {
    Route::get('/admin/user', [AdminController::class, 'index'])->name('admin.users');
    Route::post('/admin/users/approve', [AdminController::class, 'approve'])
    ->name('admin.users.approve');
    Route::post('/admin/users/deny', [AdminController::class, 'deny'])->name('admin.users.deny');
Route::get('/admin/register-requests/count', [AdminController::class, 'getNewLeaveRequestsCount'])->name('admin.register-requests.count');
});

// Ensure this route uses the 'auth' middleware to only allow authenticated users
Route::middleware(['auth'])->get('/pending', [PendingController::class, 'show'])->name('pending');
Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');


//user list
Route::get('/userlist', [UserController::class, 'userlist']);
Route::delete('/admin/users', [UserController::class, 'destroy'])->name('Admin.destroy');



//Attendance
Route::middleware(['auth', 'verified'])->group(function () {
    // Employee routes
    Route::get('/attendance/create', [AttendanceController::class, 'create'])->name('attendance.create');
    Route::post('/attendance/store', [AttendanceController::class, 'store'])->name('attendance.store');
    // Admin routes
    Route::get('/admin/attendance', [AttendanceController::class, 'index'])->name('attendance.index');
    

});
Route::get('/attendance/new-count', [AttendanceController::class, 'newAttendanceCount'])->name('attendance.new.count');
Route::get('/attendances', [AttendanceController::class, 'inde'])->name('attendances.index');
Route::get('/users', [UserController::class, 'inde'])->name('users.inde');
// aaaa





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
//leave count notification
Route::get('/leave-requests/count', [LeaveController::class, 'getNewLeaveRequestsCount'])->name('leave.requests.count');







//  Calander
Route::middleware(['auth'])->group(function () {
    // Display the calendar with all events
    Route::get('/calendarevents', [CalendarEventController::class, 'index'])->name('calendar-events.index');
 
    // Display form to create a new event
    Route::get('/calendar-events/create', [CalendarEventController::class, 'create'])->name('calendar-events.create');  
    // Store the new event
    Route::post('/calendar-events', [CalendarEventController::class, 'store'])->name('calendar-events.store'); 
    // Display form to edit an event
    Route::get('/calendar-events/edit', [CalendarEventController::class, 'edit'])->name('calendar-events.edit');
    // Update the event
    Route::put('/calendar-events/{calendarEvent}', [CalendarEventController::class, 'update'])->name('calendar-events.update');
    // Delete the event
    Route::delete('/calendar-events/{calendarEvent}', [CalendarEventController::class, 'destroy'])->name('calendar-events.destroy');
});


//Shift
Route::middleware(['auth', 'hr'])->group(function () {
    Route::resource('shifts', ShiftController::class);
    Route::resource('shift-assignments', ShiftAssignmentController::class);
    Route::get('/hr/shift-assignments', [ShiftAssignmentController::class, 'index'])->name('shift-assignments.index');
});


// Route::middleware('auth')->group(function () {
//     Route::get('view-shifts', [ShiftAssignmentController::class, 'index'])->name('view-shifts');
// });

Route::middleware(['auth'])->group(function () {
    Route::get('/user-shifts', [ShiftAssignmentController::class, 'userShifts'])->name('user-shifts');
});


//Job Requistion 

Route::resource('job-requisitions', JobRequisitionController::class);
Route::post('job-requisitions/{id}/approve', [JobRequisitionController::class, 'approve'])->name('job-requisitions.approve');





// Resourceful routes for job postings
Route::get('job-postings', [JobPostingController::class, 'index'])->name('job-postings.index'); // List all job postings
Route::get('job-postings/create', [JobPostingController::class, 'create'])->name('job-postings.create'); // Form to create a new job posting
Route::post('job-postings', [JobPostingController::class, 'store'])->name('job-postings.store'); // Store a new job posting
Route::get('job-postings/{id}', [JobPostingController::class, 'show'])->name('job-postings.show'); // Show details of a job posting
Route::get('job-postings/{id}/edit', [JobPostingController::class, 'edit'])->name('job-postings.edit'); // Form to edit a job posting
Route::put('job-postings/{id}', [JobPostingController::class, 'update'])->name('job-postings.update'); // Update a job posting
Route::delete('job-postings/{id}', [JobPostingController::class, 'destroy'])->name('job-postings.destroy'); // Delete a job posting
Route::get('/job-postings-cards', [JobPostingController::class, 'showCards'])->name('job-postings.cards');



//job applying
Route::get('/job-postings/{id}/apply', [JobPostingController::class, 'showApplyForm'])->name('job-postings.apply');
Route::post('/job-postings/{id}/apply', [JobPostingController::class, 'apply'])->name('job-postings.process-application');

//

Route::get('/job-postings/{id}/applications', [JobPostingController::class, 'viewApplications'])->name('job-postings.view-applications');


// Hiring request or job requistion
Route::post('job-requisitions/{id}/approve', [JobRequisitionController::class, 'approve'])->name('job-requisitions.approve');




//payroll admin
Route::get('/payroll', [PayrollController::class, 'index'])->name('payroll.index');
Route::get('/payroll/create', [PayrollController::class, 'create'])->name('payroll.create');
Route::post('/payroll', [PayrollController::class, 'store'])->name('payroll.store');
Route::get('/payroll/{payroll}', [PayrollController::class, 'show'])->name('payroll.show');
Route::get('/payroll/{payroll}/edit', [PayrollController::class, 'edit'])->name('payroll.edit');
Route::put('/payroll/{payroll}', [PayrollController::class, 'update'])->name('payroll.update');
Route::delete('/payroll/{payroll}', [PayrollController::class, 'destroy'])->name('payroll.destroy');
Route::get('/reports', [PayrollController::class, 'reports'])->name('reports');



//payslip
Route::get('/payslips/{id}', [PayslipController::class, 'show'])->name('payslips.show');
Route::get('/payslips/{id}/download', [PayslipController::class, 'download'])->name('payslips.download');

// For employees to view their payroll
Route::get('/payrol', [PayrollController::class, 'employeeIndex'])->name('employee.payroll.index');

// For department managers to view payroll of their department
Route::get('/manager/payroll', [PayrollController::class, 'managerIndex'])->name('manager.payroll.index');

//message

Route::middleware(['auth'])->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/messages', [MessageController::class, 'index'])->name('messages.index');
    Route::post('/messages', [MessageController::class, 'store'])->name('messages.store');
    Route::get('/messages/{user}', [MessageController::class, 'show'])->name('messages.show');
    

});
Route::get('/messages/unread_counts', [MessageController::class, 'unreadCounts'])->name('messages.unread_counts');




//trainings

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('trainings', TrainingController::class);
    Route::resource('trainings.sessions', TrainingSessionController::class)->shallow();
});



//notification
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/notification', [EmployeeTrainingNotification::class, 'index']);
});



















