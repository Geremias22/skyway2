<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiCacheEntry extends Model
{
    protected $fillable = [
        'provider',
        'cache_key',
        'request_params',
        'response_body',
        'expires_at',
    ];

    protected $casts = [
        'request_params' => 'array',
        'response_body'  => 'array',
        'expires_at'     => 'datetime',
    ];
}
