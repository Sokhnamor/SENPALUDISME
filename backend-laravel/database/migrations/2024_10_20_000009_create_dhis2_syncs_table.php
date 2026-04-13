<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dhis2_syncs', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['indices_agreges', 'trackers']);
            $table->enum('status', ['succes', 'echec', 'en_attente']);
            $table->decimal('volume_mb', 8, 2)->nullable();
            $table->string('sync_id')->nullable();
            $table->text('error_message')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->timestamp('synced_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dhis2_syncs');
    }
};