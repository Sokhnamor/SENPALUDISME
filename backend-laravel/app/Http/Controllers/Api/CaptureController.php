<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DataCapture;
use Illuminate\Http\Request;

class CaptureController extends Controller
{
    public function index()
    {
        return DataCapture::with(['sentinelSite', 'user'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'sentinel_site_id' => 'required|exists:sentinel_sites,id',
            'type' => 'required|string',
            'data' => 'required|json',
        ]);

        return DataCapture::create($validated + ['user_id' => auth()->id()]);
    }
}

