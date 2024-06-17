<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    
    public function index()
    {
    if(Auth::id() ){ 
    
 
        $usertype = Auth()->user()->user_type;
        if($usertype=='admin'){
            return Inertia::render('Admin/Dashboard');

          
        }
        else if($usertype=='hr'){
            return Inertia::render('HR/Dashboard');


             
        }
        else if($usertype=='department_manager'){
            return Inertia::render('Manager/Dashboard');


             
        }
        else if($usertype=='employee'){
            return Inertia::render('Employee/Dashboard');


             
        }
        else{
            return redirect()->back();
        }
}}}
