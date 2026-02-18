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
        Schema::create('user_preferences', function (Blueprint $table) {
            $table->id();

            // 1:1 con users (una fila por usuario)
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete()
                ->unique();

            $table->decimal('budget_min', 10, 2)->nullable();
            $table->decimal('budget_max', 10, 2)->nullable();

            // ISO 4217 (EUR, USD...)
            $table->string('currency', 3)->default('EUR');

            // Preferencias flexibles
            $table->jsonb('interests')->nullable(); // ["food","museums"]
            $table->jsonb('vibes')->nullable();     // ["city-break","nightlife"]

            // IATA 3 letras (BCN, MAD...)
            $table->string('home_airport_iata', 3)->nullable()->index();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_preferences');
    }
};
