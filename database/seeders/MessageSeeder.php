<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $message = new \App\Models\Message();
        $message->truncate(); //clear all data from table
        $message->insert(
            [
                'name' => 'Reza',
                'contact' => '081234567890',
                'message' => 'Ini adalah pesan dari admin',
                'is_read' => false,
            ],
            [
                'name' => 'Rangga',
                'contact' => '081234567890',
                'message' => 'Ini adalah pesan dari admin',
                'is_read' => false,
            ],
            [
                'name' => 'Zova',
                'contact' => '081234567890',
                'message' => 'Ini adalah pesan dari admin',
                'is_read' => false,
            ],
            [
                'name' => 'Admin',
                'contact' => '081234567890',
                'message' => 'Ini adalah pesan dari admin',
                'is_read' => false,
            ],
            [
                'name' => 'Admin',
                'contact' => '081234567890',
                'message' => 'Ini adalah pesan dari admin',
                'is_read' => false,
            ]
        );
    }
}