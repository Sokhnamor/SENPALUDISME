<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dhis2Sync extends Model
{
    use HasFactory;

    protected $fillable = [
        'sentinel_site_id',
        'status',
        'last_sync',
        'errors',
        'sync_count',
    ];

    protected $casts = [
        'last_sync' => 'datetime',
        'errors' => 'array',
    ];

    public function sentinelSite(): BelongsTo
    {
        return $this->belongsTo(SentinelSite::class);
    }
}

