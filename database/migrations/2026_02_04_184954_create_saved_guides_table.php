<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('saved_guides', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('itinerary_id')
                ->constrained('itineraries')
                ->cascadeOnDelete();

            // URL bonita pública (si is_public = true)
            $table->string('slug')->unique();

            // Público / privado
            $table->boolean('is_public')->default(false)->index();

            // Para enlaces no listados (opcional)
            $table->string('share_token', 64)->nullable()->unique();

            // Snapshot congelado de la guía
            $table->jsonb('snapshot');

            $table->unsignedInteger('version')->default(1);

            $table->timestamps();

            $table->index(['user_id', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saved_guides');
    }
};
