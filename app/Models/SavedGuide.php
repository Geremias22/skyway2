<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SavedGuide extends Model
{
    protected $fillable = [
        'user_id',
        'itinerary_id',
        'slug',
        'is_public',
        'share_token',
        'snapshot',
        'version',
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'snapshot' => 'array',
        'version' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function itinerary(): BelongsTo
    {
        return $this->belongsTo(Itinerary::class);
    }
}
