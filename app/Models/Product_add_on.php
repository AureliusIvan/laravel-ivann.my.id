<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product_add_on extends Model
{
    
    use HasFactory;
    
    
    protected $table = 'product_add_ons';

    protected $fillable = [
        'type',
        'name',
        'price',
        'description',
    ];

    public function product_add_on_type(): BelongsTo     
    {
        return $this->belongsTo(Product_add_on_type::class, 'type', 'type');
    }
}
