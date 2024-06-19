// resources/js/Pages/Calendar/Index.jsx

import React, { useRef, useEffect } from "react";
// import { usePage } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePage } from "@inertiajs/react";
export default function Index() {
    const { events } = usePage().props;
    const calendarRef = useRef(null);

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.getApi().render();
        }
    }, [events]);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Calendar</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                ref={calendarRef}
            />
        </>
    );
}
