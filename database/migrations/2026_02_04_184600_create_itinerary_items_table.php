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
        Schema::create('itinerary_items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('itinerary_day_id')
                ->constrained('itinerary_days')
                ->cascadeOnDelete();

            $table->string('item_type', 30)->index(); // flight, hotel, activity, poi, food, note...

            $table->string('title');
            $table->text('description')->nullable();

            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();

            // Google Places ID (texto)
            $table->string('place_id')->nullable()->index();

            $table->string('location_label')->nullable();

            $table->decimal('lat', 10, 7)->nullable();
            $table->decimal('lng', 10, 7)->nullable();

            $table->string('booking_url')->nullable();

            $table->decimal('cost_estimate', 10, 2)->nullable();
            $table->string('currency', 3)->default('EUR');

            $table->jsonb('meta')->nullable();

            $table->timestamps();

            $table->index(['itinerary_day_id', 'start_time']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('itinerary_items');
    }
};
