<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'base_salary', 'bonus', 'deductions', 'net_salary', 'pay_date',
        'taxes', 'insurance', 'allowances', 'other_deductions'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function calculateNetSalary()
    {
        $totalDeductions = $this->taxes + $this->insurance + $this->other_deductions + $this->deductions;
        $totalAdditions = $this->bonus + $this->allowances;
        return $this->base_salary + $totalAdditions - $totalDeductions;
    }
}
