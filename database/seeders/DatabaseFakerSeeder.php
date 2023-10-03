<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DatabaseFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $faker = Faker::create('id_ID');
        for ($i = 1; $i <= 10000; $i++) {
            // DB::table('products')->insert([
            //     'title' => $faker->title,
            //     'slug' => $faker->slug,
            //     'description' => $faker->text,
            //     'image' => $faker->image,
            //     'price' => $faker->numberBetween(1000, 1000000),
            // ]);

            DB::table('products')->insert([
                'title' => 'Kursi',
                'slug' => 'kursi',
                'description' => 'Lorem ipsum bla bla bla',
                'image' => 'kursi.jpg',
                'price' => 100000,
            ]);
        }
    }
}