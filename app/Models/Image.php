<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        // 'product_id',
        'url',
    ];


    // public function product(): BelongsTo
    // {
    //     return $this->belongsTo(Product::class);
    // }
    
    protected function Url(): Attribute
    {
        return Attribute::make(
            // convert value to storage link
            get: fn ($value) => Storage::url($value),
            // set: fn ($value) => Str::slug($value , '.'),
        );
    }
}
