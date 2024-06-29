<?php

// app/Models/TrainingSession.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingSession extends Model
{
    use HasFactory;

    protected $fillable = ['training_id', 'date', 'location', 'details'];

    public function training()
    {
        return $this->belongsTo(Training::class);
    }
}
