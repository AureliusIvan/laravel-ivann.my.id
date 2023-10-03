<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendEmail;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Contact/ContactPage');
    }

    public function SendEmail() 
    {
        $email = new SendMail();
        Mail::to('aureliusivanwijaya@gmail.com')->send($email);
    }
}