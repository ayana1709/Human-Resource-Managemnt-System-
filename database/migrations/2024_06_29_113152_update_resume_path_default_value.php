<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateResumePathDefaultValue extends Migration
{
    public function up()
    {
        Schema::table('job_applications', function (Blueprint $table) {
            // Set default value for resume_path field
            $table->string('resume_path')->default('default/path/to/resume.pdf')->change();
        });
    }

    public function down()
    {
        Schema::table('job_applications', function (Blueprint $table) {
            // Revert the default value change if necessary
            $table->string('resume_path')->default(null)->change();
        });
    }
}
