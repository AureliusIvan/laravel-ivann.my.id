<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $User = DB::table('users');
        if (
            $User->where('email', 'admin')->doesntExist()
        ) {
            $User->insert([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' =>   Hash::make('dadargulung'),
                'role' => 1
            ]);
            $User->insert([
                'name' => 'user',
                'email' => 'user@user.com',
                'password' =>  Hash::make('dadargulung'),
                'role' => 0
            ]);
        }
    }
}
