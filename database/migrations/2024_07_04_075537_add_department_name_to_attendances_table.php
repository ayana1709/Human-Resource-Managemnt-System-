<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::table('attendances', function (Blueprint $table) {
        $table->unsignedBigInteger('department_name')->nullable();

        $table->foreign('department_name')
              ->references('id')
              ->on('departments')
              ->onDelete('cascade');
    });
}

public function down()
{
    Schema::table('attendances', function (Blueprint $table) {
        $table->dropForeign(['department_name']);
        $table->dropColumn('department_name');
    });
}

};
