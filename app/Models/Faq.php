<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;

    protected $fillable = [
        'question',
        'answer',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function getCreatedAtAttribute($value)
    {
        return date('d F Y H:i:s', strtotime($value));
    }
}