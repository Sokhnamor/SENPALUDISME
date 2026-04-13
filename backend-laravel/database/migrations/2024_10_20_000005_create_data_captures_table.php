<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('data_captures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sentinel_site_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('espece')->nullable();
            $table->string('methode')->nullable();
            $table->integer('nombre')->default(0);
            $table->string('type');
            $table->longText('data');
            $table->enum('statut_infectieux', ['positif', 'negatif', 'en_attente'])->default('en_attente');
            $table->enum('status', ['pending', 'synced', 'conflict'])->default('pending');
            $table->timestamp('captured_at')->useCurrent();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('data_captures');
    }
};