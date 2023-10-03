<h1>Step to Start</h1>

<!-- download all deps -->
composer install
yarn install
<!-- generate .env -->
cp .env.example .env
<!-- generate key -->
php artisan key:generate
<!-- migrate data -->
php artisan migrate
<!-- seeding data -->
php artisan migrate:fresh --seed --seeder=CallAllSeeder
<!-- run -->
php artisan serve (in terminal 1)
yarn start (in terminal 2)

<h1>Step to Deploy</h1>
<!-- build -->
yarn build (in local)
<!-- zip everything but node modules & vendor -->
<!-- use filezilla to transfer file -->
composer install
cp .env.example .env
php artisan migrate
php artisan migrate:fresh --seed --seeder=CallAllSeeder
php artisan route:cache 
<!-- trigger storage link ini shared hosting -->
(delete storage folder on public)
ln -s ../storage/app/public storage (on public dir)
<!--  -->


<!-- Referensi -->
1. Send Email : https://www.youtube.com/watch?v=XywB2qtzSoM
2. Middleware Auth : https://www.youtube.com/watch?v=vc4sXOdE4bQ
3. Generate sitemap : https://learn2torials.com/a/generate-dynamic-sitemap-in-laravel
