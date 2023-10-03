<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CallAllSeeder extends Seeder
{

    public function run(): void
    {
        $this->call([
            WebconfigSeeder::class,
            // ProductSeeder::class,
            // ImageSeeder::class,
            UserSeeder::class,
            TestimonySeeder::class,
            MessageSeeder::class,
            // PostSeeder::class,
            // CommentSeeder::class,
            CalculationSeeder::class,
        ]);
    }
}
