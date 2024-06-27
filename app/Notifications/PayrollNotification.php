<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PayrollNotification extends Notification
{
    use Queueable;

    private $payroll;

    public function __construct($payroll)
    {
        $this->payroll = $payroll;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Your payroll for ' . $this->payroll->pay_date . ' is ready.')
                    ->action('View Payroll', url('/employee/payroll'))
                    ->line('Thank you for using our application!');
    }

    public function toArray($notifiable)
    {
        return [
            'payroll_id' => $this->payroll->id,
            'pay_date' => $this->payroll->pay_date,
            'net_salary' => $this->payroll->net_salary,
        ];
    }
}
