<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayrollsTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('payrolls');
        Schema::create('payrolls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // use user_id instead of employee_id
            $table->decimal('base_salary', 8, 2)->default(0);
            $table->decimal('bonus', 8, 2)->default(0);
            $table->decimal('deductions', 8, 2)->default(0);
            $table->decimal('net_salary', 8, 2)->default(0);
            $table->date('pay_date');
            $table->decimal('taxes', 8, 2)->default(0);
            $table->decimal('insurance', 8, 2)->default(0);
            $table->decimal('allowances', 8, 2)->default(0);
            $table->decimal('other_deductions', 8, 2)->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('payrolls');
    }
}
