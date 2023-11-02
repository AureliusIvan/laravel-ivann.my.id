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

        $productData = Product::getAllProduct();
        //sanitize data and remove all html tags
        foreach ($productData as $key => $value) {
            $productData[$key]->description = strip_tags($value->description);
        }
        return inertia('Product/ProductPage', [
            'ProductData' => $productData,
        ]);
    }

    public function ProductDetail($slug)
    {
        $ProductData = Product::where('slug', $slug)->first();
        // $ProductData->image = Image::where('product_id', $ProductData->id)->get();
        // $RecommendedProduct = Product::
        return inertia('Product/ProductDetailPage', [
            'ProductData' => $ProductData,
            // 'RecommendedProduct' => $RecommendedProduct,
        ]);
    }

    // ADMIN FUNCTION
    public function AdminPage()
    {
        $product = Product::all();
        return inertia('Admin/Product/ProductPage', [
            'ProductData' => $product,
        ]);
    }

    public function AddProduct(Request $request, Product $product)
    {
        $product->AddProduct($request);
        Cache::forget('products');
        return redirect()->back();
    }

    public function UpdateProduct(Request $request, Product $product, $id)
    {
        Cache::forget('products');
        // dd($request);
        try {
            DB::beginTransaction();
            $product = Product::where('id', $request->id)->first();
            $image_name = null;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $image_name = imgExtention($image);
                Storage::putFileAs(
                    'public',
                    $request->file('image'),
                    $image_name
                );
                $product->fill($request->only([
                    'title',
                    'slug',
                    'description',
                    'price',
                ]));
                $product->image = $image_name;
            } else {
                $product->fill($request->only([
                    'title',
                    'slug',
                    'description',
                    'price',
                ]));
            }
            $product->save();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
        }
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
