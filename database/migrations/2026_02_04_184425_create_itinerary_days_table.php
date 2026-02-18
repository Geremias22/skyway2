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
        Schema::create('itinerary_days', function (Blueprint $table) {
            $table->id();

            $table->foreignId('itinerary_id')
                ->constrained('itineraries')
                ->cascadeOnDelete();

            $table->unsignedSmallInteger('day_number'); // 1..N
            $table->date('date')->nullable();

            $table->text('summary')->nullable();

            $table->timestamps();

            $table->unique(['itinerary_id', 'day_number']);
            $table->index(['itinerary_id', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('itinerary_days');
    }
};
