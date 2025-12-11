<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceItem extends Model
{
    protected $fillable = [
        'image_path',
        'type',
        'caption',
        'sort_order',
        'is_published',
    ];
}

