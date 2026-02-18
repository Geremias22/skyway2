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
        Schema::create('itineraries', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('trip_search_id')
                ->nullable()
                ->constrained('trip_searches')
                ->nullOnDelete();

            $table->string('title')->nullable();

            $table->string('destination_label')->nullable();
            $table->string('destination_country_code', 2)->nullable()->index();

            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();

            $table->unsignedSmallInteger('days_count')->default(0);

            $table->decimal('budget_estimate', 10, 2)->nullable();
            $table->string('currency', 3)->default('EUR');

            $table->string('ai_model', 80)->nullable();
            $table->text('ai_prompt')->nullable();

            $table->jsonb('ai_input')->nullable();
            $table->jsonb('ai_output')->nullable();

            $table->timestamps();

            $table->index(['user_id', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('itineraries');
    }
};
