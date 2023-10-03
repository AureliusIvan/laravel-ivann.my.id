<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = "tags";

    protected $fillable = [
        'name',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_id');
    }
}
