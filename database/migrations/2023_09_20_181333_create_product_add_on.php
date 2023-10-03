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
        Schema::create('product_add_ons', function (Blueprint $table) {
            $table->id()->autoIncrement()->unique()->index();
            $table->string("type")->nullable();
            $table->string("name");
            $table->integer("price")->nullable(); //per m^2
            $table->string("description")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_add_on');
    }
};
