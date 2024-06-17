<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class LeaveStatusNotification extends Notification
{
    use Queueable;
    protected $leave;
    public function __construct($leave)
    {
        $this->leave = $leave;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('Your leave request has been ' . $this->leave->status . '.')
            ->action('View Leave Request', url('/leave/' . $this->leave->id))
            ->line('Thank you for using our application!');
    }

    public function toArray($notifiable)
    {
        return [
            'leave_id' => $this->leave->id,
            'status' => $this->leave->status,
        ];
    }







    /**
     * Create a new notification instance.
     */
    

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
   

    /**
     * Get the mail representation of the notification.
     */
   

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
   
}







