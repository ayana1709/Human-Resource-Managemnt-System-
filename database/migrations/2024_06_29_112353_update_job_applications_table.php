<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateJobApplicationsTable extends Migration
{
    public function up()
    {
        Schema::table('job_applications', function (Blueprint $table) {
            // Make the user_id column nullable
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('job_applications', function (Blueprint $table) {
            // Revert the user_id column to not nullable (if you want to revert this change)
            $table->string('resume')->nullable();
            $table->unsignedBigInteger('user_id')->nullable(false)->change();
        });
    }
}
