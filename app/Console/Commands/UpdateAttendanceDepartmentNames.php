<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Attendance;
use App\Models\User;

class UpdateAttendanceDepartmentNames extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'attendance:update-department-names';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update null department_name values in attendances table';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Fetch all attendances with null department_name
        $attendances = Attendance::whereNull('department_name')->get();

        foreach ($attendances as $attendance) {
            // Find the user associated with this attendance record
            $user = User::find($attendance->user_id);

            if ($user) {
                // Update the department_name based on the user's department_name
                $attendance->department_name = $user->department_name;
                $attendance->save();

                $this->info('Updated attendance ID ' . $attendance->id . ' with department_name ' . $user->department_name);
            } else {
                $this->warn('User not found for attendance ID ' . $attendance->id);
            }
        }

        $this->info('All null department_name values have been updated.');
    }
}
