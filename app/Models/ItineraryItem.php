<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItineraryItem extends Model
{
    protected $fillable = [
        'itinerary_day_id',
        'item_type',
        'title',
        'description',
        'start_time',
        'end_time',
        'place_id',
        'location_label',
        'lat',
        'lng',
        'booking_url',
        'cost_estimate',
        'currency',
        'meta',
    ];

    protected $casts = [
        'cost_estimate' => 'decimal:2',
        'lat' => 'decimal:7',
        'lng' => 'decimal:7',
        'meta' => 'array',
    ];

    public function day(): BelongsTo
    {
        return $this->belongsTo(ItineraryDay::class, 'itinerary_day_id');
    }
}
