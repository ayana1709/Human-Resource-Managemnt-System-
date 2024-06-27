<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayslipsTable extends Migration
{
        public function up()
        {
            Schema::create('payslips', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained('users');
                $table->date('pay_date');
                $table->decimal('base_salary', 10, 2);
                $table->decimal('bonus', 10, 2)->nullable();
                $table->decimal('deductions', 10, 2)->nullable();
                $table->decimal('taxes', 10, 2);
                $table->decimal('insurance', 10, 2)->nullable();
                $table->decimal('allowances', 10, 2)->nullable();
                $table->decimal('other_deductions', 10, 2)->nullable();
                $table->decimal('net_salary', 10, 2);
                $table->timestamps();
            });
        }
    
        public function down()
        {
            Schema::dropIfExists('payslips');
        }
    }
    

