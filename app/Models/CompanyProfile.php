<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    protected $fillable = [
        'company_name',
        'tagline',
        'about',
        'address',
        'phone',
        'email',
        'hero_image',
        'facebook_url',
        'instagram_url',
        'linkedin_url',
    ];
}
