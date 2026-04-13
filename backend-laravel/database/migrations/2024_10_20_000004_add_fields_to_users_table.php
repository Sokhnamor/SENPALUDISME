<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('region_id')->nullable()->constrained()->onDelete('set null');
            $table->string('etablissement')->nullable();
            $table->string('phone', 20)->nullable();
            $table->text('bio')->nullable();
            $table->enum('statut', ['actif', 'inactif'])->default('actif');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropForeign(['region_id']);
            $table->dropColumn(['role_id', 'region_id', 'etablissement', 'phone', 'bio', 'statut']);
        });
    }
};