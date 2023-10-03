<?php
// Ivan - 8 Agustus 2023
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
        Schema::create('webconfigs', function (Blueprint $table) {
            $table->id();
            $table->string('category')->default('general');
            $table->string('title')->unique();
            $table->string('alias');
            $table->string('type');
            $table->text('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('webconfigs');
    }
};