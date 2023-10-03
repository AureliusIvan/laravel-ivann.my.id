<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Images = DB::table('images');
        $Images->truncate(); //clear all data from table

        $count = 1;
        for ($i = 1; $i <= 1000; $i++) {
            $Images->insert([
                'title' => 'Gambar',
                'image' => $count . '.jpg', // Corrected the concatenation operator
            ]);

            $count++;
            if ($count == 9) {
                $count = 1;
            }
        }
    }
}
