<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Exceptions\CustomException;

class TestingController extends Controller
{
    public function index()
    {
        try{
        $data = Http::get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        }catch(\Exception $e){
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Hello World',
                'status' => 200
            ], 200);
        }
        // return json 
        return response()->json([
            'data' => $data->json(),
            'message' => 'Hello World',
            'status' => 200
        ], 200);

    }
}
