<?php

// app/Models/JobPosting.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPosting extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 
        'description', 
        'roles', 
        'responsibilities', 
        'qualifications', 
        'skills', 
        'created_by'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
