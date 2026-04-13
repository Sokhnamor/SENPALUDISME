<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('titre')->nullable();
            $table->longText('params');
            $table->string('file_path');
            $table->enum('format', ['pdf', 'excel', 'csv'])->default('pdf');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('status', ['generated', 'scheduled', 'failed'])->default('generated');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};