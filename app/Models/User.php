<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_type',
       'department_name',
       'profile_picture',
        
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }


    public function leaves()
    {
        return $this->hasMany(Leave::class);
    }
    public function department()
    {
        return $this->belongsTo(Department::class, 'department_name', 'name');
    }
    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }
    public function trainings()
{
    return $this->belongsToMany(Training::class);
}

public function trainingSessions()
    {
        return $this->belongsToMany(TrainingSession::class, 'training_user');
    }
    public function hasRole($role)
    {
        return $this->user_type === $role;
    }
    
    
}
