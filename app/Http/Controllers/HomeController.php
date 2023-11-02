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
        $productData = Product::getAllProduct();
        foreach ($productData as $key => $value) {
            $productData[$key]->description = strip_tags($value->description);
        }
        return inertia('Home/HomePage', [
            'ProductData' => $productData,
        ]);
    }
}
