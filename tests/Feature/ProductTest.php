<?php

/** @test */

namespace Tests\Feature;

use App\Exceptions\CustomException;
use App\Models\Image;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Ramsey\Uuid\Uuid;

use Tests\TestCase;

class ProductTest extends TestCase
{
    // use DatabaseTransactions;
    use RefreshDatabase;

    // harus ada "test" di depan nama function
    public function test_product_add_test_two(): void
    {


        try {
            $product  = new \App\Models\Product();
            $id = Uuid::uuid4();
            $product_data = [
                'id' => $id,
                'title' => 'Test Product',
                'slug' => 'test-product',
                'description' => 'This is a test product',
                'price' => 9.99,
                'images' => [
                    [
                        'product_id' => $id,
                        'title' => 'Test Image 1',
                        'image' => 'https://via.placeholder.com/150',
                        // 'product_id' => Uuid::uuid4(),
                    ],
                    [
                        'product_id' => $id,
                        'title' => 'Test Image 2',
                        'image' => 'https://via.placeholder.com/150',
                        // 'product_id' => Uuid::uuid4(),
                    ],
                ],
            ];
            $product->AddProduct($product_data);
            $this->assertTrue(true);
        } catch (CustomException $e) {
            $this->assertFalse(true, $e->getMessage());
        }
    }
}
