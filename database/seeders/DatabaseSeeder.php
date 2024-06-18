<?php

namespace Database\Seeders;
use App\Models\Department;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
{
    Department::create(['name' => 'HR']);
    Department::create(['name' => 'Engineering']);
    Department::create(['name' => 'Marketing']);
    // add more departments as needed
}
}
