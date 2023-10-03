<?php

namespace App\Http\Controllers;

use App\Models\Product_add_on;
use App\Models\Product_add_on_type;
use App\Models\UserCartProduct;
use App\Models\Webconfig;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalculationController extends Controller
{
    public function __invoke(Request $request)
    {
        $webconfigs = Webconfig::all();
        // return Inertia('Testing/TestingPage', compact('webconfigs'));
    }

    public function Testing()
    {
        $product_types = Product_add_on_type::all();
        $Product_add_on = Product_add_on::all();

        $Product_add_on = Product_add_on::with('product_add_on_type')->get();
        $product_types = Product_add_on_type::with('product_add_on')->get();
        return Inertia(
            'Pricing/PricingCalculationPage',
            [
                'Product_types' => $product_types,
                'Product_add_on' => $Product_add_on
            ]
        );
    }


    public function SubmitData(Request $request, UserCartProduct $user_cart_product)
    {
        $user_cart_product = new UserCartProduct();
        $user_cart_product->save($request->all());
        return redirect()->back();
    }
}
