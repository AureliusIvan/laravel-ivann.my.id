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
        Schema::create('booked_product_add_ons', function (Blueprint $table) {
            $table->bigInteger("booked_product_id")->unsigned()->index()->autoIncrement();
            $table->integer("product_add_on_id");
            $table->integer("size");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booked_product_add_on');
    }
};
