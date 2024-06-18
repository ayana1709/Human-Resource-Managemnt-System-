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
    Schema::table('users', function (Blueprint $table) {
        $table->boolean('approved')->default(false);
        $table->unsignedBigInteger('department_id')->nullable();

        $table->foreign('department_id')->references('id')->on('departments');
    });
}

public function down()
{
    Schema::table('users', function (Blueprint $table) {
        $table->dropColumn('approved');
        $table->dropForeign(['department_id']);
        $table->dropColumn('department_id');
    });
}

};
