<?php

// app/Notifications/TrainingAssigned.php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TrainingAssigned extends Notification
{
    use Queueable;

    protected $training;

    public function __construct($training)
    {
        $this->training = $training;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'training_id' => $this->training->id,
            'training_title' => $this->training->title,
        ];
    }
}
