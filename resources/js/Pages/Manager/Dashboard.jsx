import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import DepManagerSidebar from "@/Components/Sidebar/DepManagerSide";

export default function Dashboard({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />

                <div className="h-screen flex flex-col">
                    {/* <Navbar /> */}
                    <div className="flex flex-1">
                        <div className="bg-gray-800 text-white w-64 h-full p-4">
                            <DepManagerSidebar />
                        </div>

                        <main className="flex-1 bg-gray-100">
                            <div className="p-4">
                                <h2 className="text-xl mb-4">
                                    Manager Dashboard
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded shadow">
                                        Card 1
                                    </div>
                                    <div className="bg-white p-4 rounded shadow">
                                        Card 2
                                    </div>
                                    <div className="bg-white p-4 rounded shadow">
                                        Card 3
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
