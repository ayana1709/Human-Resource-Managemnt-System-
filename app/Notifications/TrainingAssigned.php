<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TrainingAssigned extends Notification
{
    use Queueable;

    private $training;

    public function __construct($training)
    {
        $this->training = $training;
    }

    public function via($notifiable)
    {
        return ['database', 'mail']; // You can add 'mail' or 'sms' if needed
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('You have been assigned to a training.')
            ->action('View Training', url('/trainings/' . $this->training->id))
            ->line('Thank you for using our application!');
    }

    public function toArray($notifiable)
    {
        return [
            'training_id' => $this->training->id,
            'training_title' => $this->training->title,
        ];
    }
}
