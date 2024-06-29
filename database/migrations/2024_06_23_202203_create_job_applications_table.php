<?php

// database/migrations/xxxx_xx_xx_create_job_applications_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationsTable extends Migration
{
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_posting_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('user_id')->nullable();
            // $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('email');
            $table->text('cover_letter');
            $table->string('resume_path');
            $table->timestamps();
        });
        
    }

    public function down()
    {
        Schema::dropIfExists('job_applications');
    }
}
