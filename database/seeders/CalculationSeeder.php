<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CalculationSeeder extends Seeder
{

    public function run(): void
    {
        // Product Type
        $product_add_on_types = DB::table('product_add_on_types');
        $product_add_on_types->truncate();
        $Data_product_add_on_types = [
            [
                'type' => 1, // 1 = 'Lemari
                'name' => 'Lemari',
                'description' => 'Ini adalah lemari',
            ],
            [
                'type' => 2, // 1 = 'Kusen Pintu
                'name' => 'Kusen Pintu',
                'description' => 'Ini adalah kusen pintu',
            ],
            [
                'type' => 3, // 1 = 'Kitchen Set
                'name' => 'Kitchen Set',
                'description' => 'Ini adalah kitchen set',
            ],
        ];
        $product_add_on_types->insert($Data_product_add_on_types);

        // Product add ons
        $product_add_ons = DB::table('product_add_ons');
        $product_add_ons->truncate();
        $data_product_add_ons = [
            // type Lemari
            [
                'type' => 1,
                'name' => 'Wacom Cintiq 16',
                'price' => 1000000,
                'description' => 'Ini adalah Wacom Cintiq 16',
            ],
            [
                'type' => 1,
                'name' => 'LG',
                'price' => 1000000,
                'description' => 'Lorem Bla bla bla',
            ],
            [
                'type' => 1,
                'name' => 'Sejahtra',
                'price' => 1000000,
                'description' => 'Lorem Bla bla bla',
            ],
            [
                'type' => 1,
                'name' => 'Sanyo',
                'price' => 1000000,
                'description' => 'Lorem Bla bla bla',
            ],
            // type Kusen Pintu
            [
                'type' => 2,
                'name' => 'Atlas',
                'price' => 1000000,
                'description' => 'Lorem Bla bla bla',
            ],
            [
                'type' => 2,
                'name' => 'Sanyo',
                'price' => 1000000,
                'description' => 'Lorem Bla bla bla',
            ],
            // type Kitchen set 
            [
                'type' => 3,
                'name' => 'Ciangmai',
                'price' => 20000,
                'description' => 'Ini adalah kusen pintu',
            ],
            [
                'type' => 3,
                'name' => 'Lapindo',
                'price' => 30000,
                'description' => 'Ini adalah kusen pintu Lapindo',
            ],
        ];
        $product_add_ons->insert($data_product_add_ons);
    }
}