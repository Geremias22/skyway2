<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPreference extends Model
{
    protected $fillable = [
        'user_id',
        'budget_min',
        'budget_max',
        'currency',
        'interests',
        'vibes',
        'home_airport_iata',
    ];

    protected $casts = [
        'interests' => 'array',
        'vibes' => 'array',
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
