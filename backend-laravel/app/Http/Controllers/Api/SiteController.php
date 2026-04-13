<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SentinelSite;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return SentinelSite::with(['region', 'users'])->get();
    }

    public function show(SentinelSite $site)
    {
        $site->load(['region', 'dataCaptures', 'dhis2Syncs']);
        return $site;
    }
}

