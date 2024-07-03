<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ManagerMidlleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check if the authenticated user is an HR
        if (Auth::check() && Auth::user()->user_type === 'department_manager') {
            return $next($request);
        }

        // If the user is not an HR, redirect to a different page or show an error
        return redirect('/')->with('error', 'You do not have HR access.');
    }
}
