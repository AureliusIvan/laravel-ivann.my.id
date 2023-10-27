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
        Schema::create('products', function (Blueprint $table) {
            // $table->index('id');
            $table->string('id')->primary()->unique();
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->string('category')->nullable();
            $table->string('image')->nullable();
            $table->integer('price')->nullable();
            $table->string('link')->nullable();
            $table->timestamp('project_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
