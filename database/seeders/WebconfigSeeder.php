<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WebconfigSeeder extends Seeder
{

    public function run(): void
    {
        $webconfig = DB::table('webconfigs');
        $webconfig->truncate(); //clear all data from table

        $data = [
            // General 
            [
                'category' => 'general',
                'title' => 'company_name',
                'alias' => 'Nama Perusahaan',
                'type' => 'text',
                'value' => 'Ivan\'s Docs',
            ],
            [
                'category' => 'general',
                'title' => 'company_description',
                'alias' => 'Deskripsi Perusahaan',
                'type' => 'textarea',
                'value' => 'A third years Informatics student at University of Multimedia Nusantara. 
                Have a passion in Software Engineering and Machine Learning.
                Currently working as a Software Engineer and Founder of Renara House.',
            ],
            [
                'category' => 'general',
                'title' => 'company_address',
                'alias' => 'Alamat Perusahaan',
                'type' => 'text',
                'value' => 'Jl. Raya Ciputat Parung No. 1, Ciputat, Tangerang Selatan, Banten',
            ],
            [
                'category' => 'general',
                'title' => 'company_history',
                'alias' => 'Sejarah Perusahaan',
                'type' => 'textarea',
                'value' => 'Renara adalah agency yang bergerak di bidang penyedia layananan digital',
            ],
            [
                'category' => 'general',
                'title' => 'company_date_established',
                'alias' => 'Tanggal Perusahaan Berdiri',
                'type' => 'text',
                'value' => '01 Januari 2021',
            ],
            [
                'category' => 'general',
                'title' => 'company_vision',
                'alias' => 'Visi Perusahaan',
                'type' => 'text',
                'value' => 'Menjadi perusahaan yang terpercaya dan terbaik di bidangnya',
            ],
            [
                'category' => 'general',
                'title' => 'company_mission',
                'alias' => 'Misi Perusahaan',
                'type' => 'text',
                'value' => 'Membangun kepercayaan pelanggan dengan memberikan pelayanan terbaik',
            ],
            [
                'category' => 'general',
                'title' => 'company_logo',
                'alias' => 'Logo Perusahaan',
                'type' => 'image',
                'value' => 'logo.svg',
            ],
            [
                'category' => 'general',
                'title' => 'footer_description',
                'alias' => 'Informasi pada Footer',
                'type' => 'text',
                'value' => '',
            ],
            // Home
            [
                'category' => 'home',
                'title' => 'home_banner',
                'alias' => 'Banner Halaman Utama',
                'type' => 'image',
                'value' => 'biiio-home-banner1693634164.webp',

            ],
            [
                'category' => 'home',
                'title' => 'home_banner_description',
                'alias' => 'Deskripsi Banner pada Halaman Utama',
                'type' => 'textarea',
                'value' => 'We create innovative and functional designs.',

            ],
            // About
            [
                'category' => 'about',
                'title' => 'about_description',
                'alias' => 'Deskripsi pada Halaman About',
                'type' => 'textarea',
                'value' => 'We create innovative and functional designs.',
            ],
            // Contact
            [
                'category' => 'contact',
                'title' => 'company_call_number',
                'alias' => 'Nomor Telepon Perusahaan',
                'type' => 'text',
                'value' => '(021) 740 6044',
            ],
            [
                'category' => 'contact',
                'title' => 'company_email',
                'alias' => 'Alamat Email Perusahaan',
                'type' => 'text',
                'value' => 'company@gmail.com',
            ],
            [
                'category' => 'contact',
                'title' => 'company_facebook',
                'alias' => 'Link Facebook Perusahaan',
                'type' => 'text',
                'value' => 'facebook.com/company',
            ],
            [
                'category' => 'contact',
                'title' => 'company_instagram',
                'alias' => 'Link Instagram Perusahaan',
                'type' => 'text',
                'value' => 'instagram.company',
            ],
            [
                'category' => 'contact',
                'title' => 'company_linkedin',
                'alias' => 'Link Linkedin Perusahaan',
                'type' => 'text',
                'value' => 'linkedin.company',
            ],
            // Personal
            [
                'category' => 'general',
                'title' => 'cv',
                'alias' => 'Upload CV',
                'type' => 'file',
                'value' => '',
            ],
        ];

        $webconfig->insert($data); //insert batch data to database table (webconfigs)
        // php artisan migrate:fresh --seed --seeder=WebconfigSeeder
    }
}
