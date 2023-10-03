#!/bin/bash

# Navigate to the Laravel project directory

# Install Composer dependencies
composer install

# Generate Laravel application key
cp .env.example .env
php artisan key:generate

# 
php artisan config:cache

# Run Laravel database migrations
php artisan migrate
php artisan migrate:fresh --seed --seeder=CallAllSeeder

cd public
rm -r storage
ln -s ../storage/app/public storage