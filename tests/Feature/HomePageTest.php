<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Http\Controllers\ProductController;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class HomePageTest extends TestCase
{

    public function basicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
