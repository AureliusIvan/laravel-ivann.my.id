#!/bin/bash

# Navigate to the Laravel project directory

# Install Composer dependencies
composer install

# Generate Laravel application key
cp .env.production .env
php artisan key:generate
# 
php artisan config:clear
# Run Laravel database migrations
# php artisan migrate
# php artisan migrate:fresh --seed --seeder=CallAllSeeder

php artisan route:clear
php artisan route:cache

cd public
rm -r public/storage
ln -s storage/app/public public/storage