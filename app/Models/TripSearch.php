<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripSearch extends Model
{
    protected $fillable = [
        'user_id',
        'search_type',
        'origin_iata',
        'destination_iata',
        'destination_country_code',
        'departure_date',
        'return_date',
        'flexible_dates',
        'nights_min',
        'nights_max',
        'adults',
        'children',
        'infants',
        'cabin_class',
        'max_stops',
        'airlines_include',
        'airlines_exclude',
        'budget_max',
        'currency',
        'filters',
    ];

    protected $casts = [
        'departure_date' => 'date',
        'return_date' => 'date',
        'flexible_dates' => 'boolean',
        'airlines_include' => 'array',
        'airlines_exclude' => 'array',
        'filters' => 'array',
        'budget_max' => 'decimal:2',
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
