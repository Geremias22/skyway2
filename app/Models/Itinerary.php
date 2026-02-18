<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Itinerary extends Model
{
    protected $fillable = [
        'user_id',
        'trip_search_id',
        'title',
        'destination_label',
        'destination_country_code',
        'start_date',
        'end_date',
        'days_count',
        'budget_estimate',
        'currency',
        'ai_model',
        'ai_prompt',
        'ai_input',
        'ai_output',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'days_count' => 'integer',
        'budget_estimate' => 'decimal:2',
        'ai_input' => 'array',
        'ai_output' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tripSearch(): BelongsTo
    {
        return $this->belongsTo(TripSearch::class);
    }

    public function days(): HasMany
    {
        return $this->hasMany(ItineraryDay::class);
    }
}
