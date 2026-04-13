<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MlModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'version',
        'status',
        'metrics',
        'file_path',
    ];

    protected $casts = [
        'metrics' => 'array',
    ];
}

