<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DataCapture extends Model
{
    use HasFactory;

    protected $fillable = [
        'sentinel_site_id',
        'user_id',
        'type',
        'data',
        'status',
        'captured_at',
    ];

    protected $casts = [
        'data' => 'array',
        'captured_at' => 'datetime',
    ];

    public function sentinelSite(): BelongsTo
    {
        return $this->belongsTo(SentinelSite::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

