<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Builder;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Fix "key too long" avec les anciennes versions MySQL
        Builder::defaultStringLength(191);
    }

    public function register(): void
    {
        //
    }
}