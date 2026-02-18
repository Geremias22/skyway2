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
        Schema::create('trip_searches', function (Blueprint $table) {
            $table->id();

            // Nullable si permites modo demo / invitado
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->string('search_type', 40); // flight, explore_budget, vibes, no_date...

            $table->string('origin_iata', 3)->nullable()->index();
            $table->string('destination_iata', 3)->nullable()->index();
            $table->string('destination_country_code', 2)->nullable()->index();

            $table->date('departure_date')->nullable();
            $table->date('return_date')->nullable();
            $table->boolean('flexible_dates')->default(false);

            $table->unsignedSmallInteger('nights_min')->nullable();
            $table->unsignedSmallInteger('nights_max')->nullable();

            $table->unsignedSmallInteger('adults')->default(1);
            $table->unsignedSmallInteger('children')->default(0);
            $table->unsignedSmallInteger('infants')->default(0);

            $table->string('cabin_class', 20)->nullable(); // economy, premium, business
            $table->unsignedTinyInteger('max_stops')->nullable();

            $table->jsonb('airlines_include')->nullable();
            $table->jsonb('airlines_exclude')->nullable();

            $table->decimal('budget_max', 10, 2)->nullable();
            $table->string('currency', 3)->default('EUR');

            $table->jsonb('filters')->nullable();

            $table->timestamps();

            // Índice útil para historiales por usuario
            $table->index(['user_id', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip_searches');
    }
};
