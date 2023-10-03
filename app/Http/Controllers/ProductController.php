<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    //user


    public function __invoke()
    {
        // $products = $product->all();
        // foreach ($products as $item) {
        //     $item->image = Image::where('product_id', $item->id)->get();
        // }
        return inertia('Product/ProductPage', [
            'ProductData' => fn () => Product::getAllProduct(),
        ]);
    }

    public function ProductDetail($slug)
    {
        $ProductData = Product::where('slug', $slug)->first();
        $ProductData->image = Image::where('product_id', $ProductData->id)->get();
        // $RecommendedProduct = Product::
        return inertia('Product/ProductDetailPage', [
            'ProductData' => $ProductData,
            // 'RecommendedProduct' => $RecommendedProduct,
        ]);
    }

    // ADMIN FUNCTION
    public function AdminPage(Product $product)
    {

        // $ProductData = $product->getAllProductWithCache();

        $products = $product->all();
        foreach ($products as $item) {
            $item->image = Image::where('product_id', $item->id)->get();
        }
        return inertia('Admin/Product/ProductPage', [
            'ProductData' => $products,
        ]);
    }

    public function AddProduct(Request $request, Product $product)
    {

        // dd($request->all());
        // $request->validate([
        //     'title' => 'required',
        //     'description' => 'required',
        //     'price' => 'required',
        //     'image' => 'required',
        // ]);
        $product->AddProduct($request);
        Cache::forget('products');
        return redirect()->back();
    }

    public function UpdateProduct(Request $request, Product $product, $id)
    {
        Cache::forget('products');
        $product->UpdateProduct($request);
        return redirect()->back();
    }

    public function DeleteProduct(Product $product, $id)
    {
        Cache::forget('ProductData');
        // $product->DeleteProduct($id);
        $product->where('id', $id)->delete();
        // dd($product);\
        return redirect()->back();
    }
}
