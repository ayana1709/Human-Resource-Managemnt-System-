<?php

// app/Models/CalendarEvent.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'start', 'end', 'is_holiday',
    ];
}

