<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a sitemap';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // creates sitemap with all urls in your website
        SitemapGenerator::create("https://localhost.com")
            ->getSitemap()
            ->add(Url::create('/')->setPriority(1))
            ->writeToFile(public_path('sitemap.xml'));
    }
}
