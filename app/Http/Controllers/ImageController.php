<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function uploadImage(Request $request)
    {
        try {
            if (!$request->hasFile('image')) {
                return response()->json([
                    'message' => 'image is required',
                ], 400);
            }


            // store image to storage
            $path = $request->file('image')->store('public/images');

            // store image to database
            $image = Image::create([
                'title' => imgExtention($request->image),
                'url' => $path,
            ]);
            return response()->json([
                'message' => 'Image uploaded successfully',
                'data' => $image,
                'status' => 200,
            ], 200);

        } catch (CustomException $e) {
            return response()->json([
                'message' => "Error: {$e->getMessage()}",
                'code' => 400,
            ], 400);
        }
    }
}
