<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Webconfig extends Model
{

    // protected $table = 'webconfig';
    use HasFactory;

    public $fillable = [
        'category',
        'title',
        'alias',
        'type',
        'value',
    ];

    public $timestamps = true;

    // help to make date formated better
    public $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected function value(): Attribute
    {
        return Attribute::make(
            // convert value to storage link
            get: function () {
                if ($this->type == 'image') {
                    return Storage::url($this->attributes['value']);
                } else if ($this->type == 'file') {
                    return Storage::url($this->attributes['value']);
                } else {
                    return $this->attributes['value'];
                }
            }
        );
    }

    public function getAllData() //with caching
    {
        $key = 'webconfig';
        $webconfig  = new \App\Models\Webconfig();
        if (Cache::has($key)) {
            $webconfig = Cache::get($key);
        } else {
            $webconfig = $webconfig->getAllEntryData();
            Cache::put($key, $webconfig, 10000);
        }
        return $webconfig;
    }

    public function getValueByTitle($title)
    {
        $webconfig = Webconfig::where('title', $title)->first();
        return $webconfig->value;
    }

    public function getAllEntryData()
    {
        $webconfig = Webconfig::all();
        $webconfigdata = [];
        foreach ($webconfig as $key => $value) {
            $webconfigdata[$value->title] = $value->value;
        }
        return $webconfigdata;
    }
}
