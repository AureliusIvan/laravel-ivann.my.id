<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'testimony',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];
}