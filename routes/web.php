<?php

use App\Http\Controllers\CalculationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebconfigController;
use App\Models\Image;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// general user
// Route::get('/', function () {
//     return Inertia::render('', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', HomeController::class)->name('home');

Route::get('/about', function () {
    return Inertia::render('About/AboutPage');
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services/ServicesPage');
})->name('services');

Route::get('/testing', function () {
    return Inertia::render('Testing/TestingPage');
})->name('testing');
Route::get('/contact', ContactController::class)->name('contact');

Route::get('/post', ProductController::class)->name('product');
Route::get('/post/{slug}', [ProductController::class, 'ProductDetail'])->name('product.detail');

Route::get('/gallery', GalleryController::class)->name('gallery');

Route::get('/pricing', [CalculationController::class, 'Testing'])->name('pricing');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin/AdminPage');
    })->name('admin');
    Route::get('/admin/webconfig', WebconfigController::class)->name('admin.webconfig');
    Route::post('/admin/webconfig', [WebconfigController::class, 'UpdateWebconfig'])->name('admin.webconfig.update');

    // PRODUCT
    Route::get('/admin/post', [ProductController::class, 'AdminPage'])->name('admin.product');
    Route::get(
        '/admin/post/add',
        function () {
            return Inertia::render('Admin/Product/ProductAddPage');
        }
    )->name('admin.post.addpage');
    Route::post('/admin/post/{id}', [ProductController::class, 'UpdateProduct'])->name('admin.product.update');
    Route::delete('/admin/post/{id}', [ProductController::class, 'DeleteProduct'])->name('admin.product.delete');
    Route::post('/admin/post', [ProductController::class, 'AddProduct'])->name('admin.product.add');

    // GALLERY
    Route::get('/admin/gallery', [GalleryController::class, 'AdminPage'])->name('admin.gallery');

    // Route Testing

    // PROFILE
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



// Post image
Route::post('uploadimage', [ImageController::class, 'uploadImage']);

// Fallback route
Route::fallback(function () {
    return Inertia::render('ErrorPage');
})->name('fallback');

require __DIR__ . '/auth.php';