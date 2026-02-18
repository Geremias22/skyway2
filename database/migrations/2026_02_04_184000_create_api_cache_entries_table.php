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
        Schema::create('api_cache_entries', function (Blueprint $table) {
            $table->id();

            // Ej: amadeus, google_places, gemini
            $table->string('provider', 40)->index();

            // Hash único de los parámetros para cachear
            $table->string('cache_key', 128)->unique();

            // Params + respuesta cacheada
            $table->jsonb('request_params')->nullable();
            $table->jsonb('response_body')->nullable();

            // TTL
            $table->timestamp('expires_at')->nullable()->index();

            $table->timestamps();

            // Índice útil para limpieza por proveedor + caducidad
            $table->index(['provider', 'expires_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('api_cache_entries');
    }
};
