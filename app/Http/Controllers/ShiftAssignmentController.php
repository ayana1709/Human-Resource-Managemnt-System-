<?php
namespace App\Http\Controllers;

use App\Models\Shift;
use App\Models\ShiftAssignment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;



class ShiftAssignmentController extends Controller
{
    public function index(Request $request) 
    {
        $shiftType = $request->get('shiftType');
        $shiftDate = $request->get('shiftDate');
        $shiftAssignments = ShiftAssignment::with('user', 'shift')
        ->when($shiftType, function($query, $shiftType) {
            return $query->whereHas('shift', function($q) use ($shiftType) {
                $q->where('name', $shiftType);
            });
        })
        ->when($shiftDate, function($query, $shiftDate) {
            return $query->where('shift_date', $shiftDate);
        })
        ->get();


        $shifts = Shift::all();
         $users = User::all();


        return Inertia::render('HR/Shifts/ShiftAssignment', [
            'shiftAssignments' => $shiftAssignments,
            'shifts' => $shifts,
            'users' => $users,
        ]);

        

       

       







    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'shift_id' => 'required|exists:shifts,id',
            'shift_date' => 'required|date',
        ]);

        ShiftAssignment::create($validated);

        return redirect()->back()->with('success', 'Shift assigned successfully.');
    }

    public function update(Request $request, ShiftAssignment $shiftAssignment)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'shift_id' => 'required|exists:shifts,id',
            'shift_date' => 'required|date',
        ]);

        $shiftAssignment->update($validated);

        return redirect()->back()->with('success', 'Shift assignment updated successfully.');
    }

    public function destroy(ShiftAssignment $shiftAssignment)
    {
        $shiftAssignment->delete();
        return redirect()->back()->with('success', 'Shift assignment deleted successfully.');
    }








    public function userShifts(Request $request)
    {
        $user = auth()->user();
        $shiftType = $request->get('shiftType');
        $shiftDate = $request->get('shiftDate');

        $shiftAssignments = ShiftAssignment::with('shift')
            ->where('user_id', $user->id)
            ->when($shiftType, function($query, $shiftType) {
                return $query->whereHas('shift', function($q) use ($shiftType) {
                    $q->where('name', $shiftType);
                });
            })
            ->when($shiftDate, function($query, $shiftDate) {
                return $query->where('shift_date', $shiftDate);
            })
            ->get();

        $shifts = Shift::all();
        if (Auth::check()) {
            $user = Auth::user();
            $usertype = $user->user_type;
            if($usertype=='employee'){

        return Inertia::render('Employee/Shifts/UserShift', [
            'shiftAssignments' => $shiftAssignments,
            'shifts' => $shifts,
        ]);
    }else if($usertype=='department_manager'){
        return Inertia::render('Manager/Shifts/UserShift', [
            'shiftAssignments' => $shiftAssignments,
            'shifts' => $shifts,
        ]);

        }else{
            return redirect()->back();
        }
        
    

        }
    }
}
