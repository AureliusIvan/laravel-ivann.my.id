<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{

    public function __invoke(Image $image)
    {
        $images = $image->all();
        return Inertia::render('Gallery/GalleryPage', [
            'images' => $images
        ]);
    }


    // admin
    public function AdminPage(Image $image)
    {
        $images = $image->all();
        return Inertia::render('Admin/Gallery/GalleryPage', [
            'images' => $images
        ]);
    }
}