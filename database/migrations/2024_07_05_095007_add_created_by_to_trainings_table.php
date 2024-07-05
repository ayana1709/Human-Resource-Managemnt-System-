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
    Schema::table('trainings', function (Blueprint $table) {
        $table->unsignedBigInteger('created_by')->nullable()->after('description');
        $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
    });
}

public function down()
{
    Schema::table('trainings', function (Blueprint $table) {
        $table->dropForeign(['created_by']);
        $table->dropColumn('created_by');
    });
}

};
