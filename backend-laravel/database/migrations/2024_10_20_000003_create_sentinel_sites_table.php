<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sentinel_sites', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('region_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['urbaine', 'rurale'])->default('rurale');
            $table->decimal('lat', 10, 8);
            $table->decimal('lng', 11, 8);
            $table->text('address')->nullable();
            $table->string('contact_phone', 20)->nullable();
            $table->string('environnement')->nullable();
            $table->string('methode_piege')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sentinel_sites');
    }
};