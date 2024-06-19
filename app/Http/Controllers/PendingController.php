<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PendingController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();

        return Inertia::render('Pending', [
            'user' => $user,
        ]);
    }
}
