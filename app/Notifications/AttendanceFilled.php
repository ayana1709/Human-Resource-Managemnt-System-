<?php

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AttendanceFilled extends Notification
{
    use Queueable;

    private $attendance;

    public function __construct($attendance)
    {
        $this->attendance = $attendance;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'attendance_id' => $this->attendance->id,
            'user_id' => $this->attendance->user_id,
            'message' => 'New attendance has been filled',
        ];
    }
}
