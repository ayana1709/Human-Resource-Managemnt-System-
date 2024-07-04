<?php

// app/Models/Attendance.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'check_in',
        'check_out',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function department():BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
