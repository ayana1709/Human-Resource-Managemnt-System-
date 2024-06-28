<?php

// app/Notifications/UserAssignedToTraining.php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserAssignedToTraining extends Notification
{
    use Queueable;

    protected $training;

    public function __construct($training)
    {
        $this->training = $training;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('You have been assigned to a training.')
                    ->action('View Training', url('/trainings/' . $this->training->id))
                    ->line('Thank you for using our application!');
    }
}
