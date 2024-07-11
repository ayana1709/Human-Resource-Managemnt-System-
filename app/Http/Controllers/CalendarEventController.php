<?php


namespace App\Http\Controllers;

use App\Models\CalendarEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CalendarEventController extends Controller
{
    public function index()

    {
        $events = CalendarEvent::all();
        if(Auth::id() ){ 
            
            $usertype = Auth()->user()->user_type;
            if($usertype=='admin'){
            return Inertia::render('Admin/Calander/Index', ['events' => $events]);
            } 
            else if($usertype=='employee'){

                return Inertia::render('Employee/Calander/Index', ['events' => $events]);

             
            }
            else if($usertype=='hr'){

                return Inertia::render('HR/Calander/Index', ['events' => $events]);

             
            }
            else if($usertype=='department_manager'){

                return Inertia::render('Manager/Calander/Index', ['events' => $events]);

             
            }
            else{
                return redirect()->back();
            }


        }
        
    }

    public function create()
    {
        return Inertia::render('Admin/Calander/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start' => 'required|date',
            'end' => 'nullable|date|after_or_equal:start',
            'is_holiday' => 'boolean',
        ]);

        CalendarEvent::create($request->all());

        return redirect()->route('calendar-events.index')->with('success', 'Event created successfully.');
    }

    public function edit(CalendarEvent $calendarEvent)
    {
        return Inertia::render('Admin/Calander/Edit', ['event' => $calendarEvent]);
    }

    public function update(Request $request, CalendarEvent $calendarEvent)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start' => 'required|date',
            'end' => 'nullable|date|after_or_equal:start',
            'is_holiday' => 'boolean',
        ]);

        $calendarEvent->update($request->all());

        return redirect()->route('calendar-events.index')->with('success', 'Event updated successfully.');
    }

    public function destroy(CalendarEvent $calendarEvent)
    {
        $calendarEvent->delete();

        return redirect()->route('calendar-events.index')->with('success', 'Event deleted successfully.');
    }
}
