<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApprovalStatusController extends Controller
{
    public function checkApproval(Request $request)
    {
        // Get the authenticated user
        $user = $request->user();

        // Return the approval status
        return response()->json([
            'approved' => $user->approved,
        ]);
    }
}
