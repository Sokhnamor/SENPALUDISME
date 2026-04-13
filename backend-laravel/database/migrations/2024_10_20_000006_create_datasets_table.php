<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('datasets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->foreignId('region_id')->nullable()->constrained()->onDelete('set null');
            $table->string('version')->default('v1.0.0');
            $table->integer('nb_images')->default(0);
            $table->string('source_annotations')->nullable();
            $table->longText('annotations')->nullable();
            $table->enum('status', ['valide', 'en_revision', 'erreur', 'archive'])->default('valide');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('datasets');
    }
};