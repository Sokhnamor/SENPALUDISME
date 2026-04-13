<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SentinelSite extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'region_id',
        'type',
        'lat',
        'lng',
        'address',
        'contact_phone',
        'lab_equipment',
        'active',
    ];

    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function dataCaptures(): HasMany
    {
        return $this->hasMany(DataCapture::class);
    }

    public function dhis2Syncs(): HasMany
    {
        return $this->hasMany(Dhis2Sync::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}


