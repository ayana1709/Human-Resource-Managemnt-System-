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
        $totalDeductions = $this->deductions + $this->taxes + $this->insurance + $this->other_deductions;
        return $this->base_salary + $this->bonus + $this->allowances - $totalDeductions;
    }

    public function calculateTaxes($base_salary)
    {
        if ($base_salary <= 600) {
            return 0;
        } elseif ($base_salary <= 1650) {
            return ($base_salary - 600) * 0.10;
        } elseif ($base_salary <= 3200) {
            return (1650 - 600) * 0.10 + ($base_salary - 1650) * 0.15;
        } elseif ($base_salary <= 5250) {
            return (1650 - 600) * 0.10 + (3200 - 1650) * 0.15 + ($base_salary - 3200) * 0.20;
        } elseif ($base_salary <= 7800) {
            return (1650 - 600) * 0.10 + (3200 - 1650) * 0.15 + (5250 - 3200) * 0.20 + ($base_salary - 5250) * 0.25;
        } elseif ($base_salary <= 10900) {
            return (1650 - 600) * 0.10 + (3200 - 1650) * 0.15 + (5250 - 3200) * 0.20 + (7800 - 5250) * 0.25 + ($base_salary - 7800) * 0.30;
        } else {
            return (1650 - 600) * 0.10 + (3200 - 1650) * 0.15 + (5250 - 3200) * 0.20 + (7800 - 5250) * 0.25 + (10900 - 7800) * 0.30 + ($base_salary - 10900) * 0.35;
        }
    }
}
