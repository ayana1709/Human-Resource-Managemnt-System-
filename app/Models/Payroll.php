<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'base_salary', 'bonus', 'deductions', 'net_salary', 'pay_date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}


