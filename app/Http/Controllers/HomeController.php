<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use App\Models\Testimony;
use App\Models\Webconfig;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke(Product $product)
    {
        return inertia('Home/HomePage', [
            'ProductData' => Product::getAllProduct(),
        ]);
    }
}
