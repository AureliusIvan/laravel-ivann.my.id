<?php

namespace App\Models;

// use Attribute;

use App\Exceptions\CustomException;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Models\Image;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;
use Ramsey\Uuid\Uuid;

class Product extends Model
{
    use HasFactory;

    public $fillable = [
        'id',
        'title',
        'slug',
        'description',
        'image',
        'price',
    ];

    protected $casts = [
        'created_at' => 'datetime:l, Y-m-d H:i:s', // l represents the full day name
        'updated_at' => 'datetime:l, Y-m-d H:i:s'
    ];

    public $timestamps = true;

    // protected static function booted()
    // {
    //     static::creating(function ($product) {
    //         // $product->slug = Str::slug($product->title);
    //         try {
    //             $product->id = Uuid::uuid4()->toString();
    //         } catch (\Exception $e) {
    //             error_log($e);
    //         }
    //     });
    // }

    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function Title(): Attribute
    {
        return Attribute::make(
            // convert value to uppercase
            get: fn ($value) => ucfirst($value),
            // set: fn ($value) =>  Str::ucfirst($value)
        );
    }

    protected function Slug(): Attribute
    {
        return Attribute::make(
            // convert slug to lowercase and remove space with dash
            get: fn ($value) => Str::slug($value),
            set: fn ($value) => Str::slug($value)
        );
    }

    public static function getAllProduct()
    {
        try {
            if (Cache::has('products')) {
                $products = Cache::get('products');
                return $products;
            }
            $products = Product::all();
            foreach ($products as $item) {
                $item->image = Image::where('product_id', $item->id)->get();
            }
            Cache::put('products', $products, 10000);
            return $products;
        } catch (\Exception $e) {
            error_log($e);
        }
    }
    public function getAllProductWithCache()
    {
        $productData = Product::all()->where('image_id', null);
        // $productData = Product::all();
        // $Data = Image::with('product')->get();
        // dd($productData[0]->image);
        // $images = Image::all()->where('related_id', null);
        // foreach ($productData as $key => $value) {
        //     $images[$value->id] = $value->image;
        // }
        // get all product and get all image that have 'related_id' column = 'id' of product
        // $productData = Product::with('image')->get();
        // dd($productData);
        // $productData = Product::with('images')->get();
        // $productData = Product::with('images')->get();
        return $productData;
    }



    public function AddProduct($request)
    {
        try {
            DB::beginTransaction();
            $product = new Product();
            $id = Uuid::uuid4()->toString();

            if (!$request->images) {
                throw CustomException::Custom('Image is required');
            }
            foreach ($request->images as $image) {
                $image_file = $image[0];
                $image_name = imgExtention($image_file);
                Storage::putFileAs(
                    'public',
                    $image_file,
                    $image_name
                );
                $image_file = Image::create([
                    'product_id' => $id,
                    'image' => $image_name,
                ]);
                // dd($product->id);
                $image_file->save();
            }
            $product->fill($request->only([
                'title',
                'slug',
                'description',
                'price',
            ]));
            $product->id = $id;
            $product->save();
            DB::commit();
        } catch (CustomException $e) {
            DB::rollBack();
            error_log($e);
        }
    }


    public function UpdateProduct($request)
    {
        try {
            DB::beginTransaction();
            $product = $this->find($request->id);
            $image_name = null;
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                // $image_name = Str::slug((pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME) . '-' . time() . "." . $image->getClientOriginalExtension()), '.');
                $image_name = imgExtention($image);
                Storage::putFileAs(
                    'public',
                    $request->file('image'),
                    $image_name
                );
                $image = Image::create([
                    'image' => $image_name,
                ]);
                $product->image_id = $image->id;
            }

            $product->fill($request->only([
                'title',
                'slug',
                'description',
                'price',
            ]));
            $product->save();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);
        }
    }

    public function DeleteProduct($id)
    {
        $product = $this->find($id);
        Storage::delete('public/' . $product->image);
        $product->delete();
    }


    // private function uploadImage($image)
    // {
    //     if ($image) {
    //         $image_name = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME) . '-' . time() . '.' . $image->getClientOriginalExtension();
    //         Storage::putFileAs(
    //             'public',
    //             $image,
    //             $image_name
    //         );

    //         return $image_name;
    //     }

    //     return null;
    // }
}
