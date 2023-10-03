<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function SendEmail(Request $request)
    {
        $data = $request->all();
        $data['email'] = $request->email;
        $data['name'] = $request->name;
        $data['message'] = $request->message;
        // antrian email
        dispatch(new SendEmailJob($data));
        return response()->json([
            'message' => 'Email was sent'
        ]);
    }
}
