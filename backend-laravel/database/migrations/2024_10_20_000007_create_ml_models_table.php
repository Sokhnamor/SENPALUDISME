<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ml_models', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['image', 'audio', 'prediction']);
            $table->string('architecture')->nullable();
            $table->string('version');
            $table->enum('context', ['serveur_national', 'gateway_locale'])->default('serveur_national');
            $table->enum('status', ['actif', 'archive', 'en_test'])->default('actif');
            $table->longText('metrics')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ml_models');
    }
};