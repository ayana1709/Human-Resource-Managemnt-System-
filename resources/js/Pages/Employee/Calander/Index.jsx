// resources/js/Pages/Calendar/Index.jsx

import React, { useRef, useEffect } from "react";
// import { usePage } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import EmployeeSidebar from "@/Components/Sidebar/EmployeeSidebar";
export default function Index({ auth }) {
    const { events } = usePage().props;
    const calendarRef = useRef(null);

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.getApi().render();
        }
    }, [events]);

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <EmployeeSidebar />

                        <main className="flex-1 bg-gray-100">
                            <div className="p-8">
                                <FullCalendar
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin,
                                    ]}
                                    initialView="dayGridMonth"
                                    events={events}
                                    ref={calendarRef}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
