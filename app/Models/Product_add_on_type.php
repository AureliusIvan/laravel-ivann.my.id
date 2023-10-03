<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Product_add_on_type extends Model
{
    use HasFactory;

    protected $table = 'product_add_on_types';

    protected $fillable = [
        'type',
        'name',
        'description',
    ];

    public function product_add_on(): HasMany
    {
        return $this->hasMany(Product_add_on::class, 'type', 'type');
    }
}
