<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layouts_keys', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->integer('id_user');
            $table->string('name');
            $table->string('name_slug');
            $table->enum('publication_type',['public', 'private'])->default('private');
            $table->string('description');
            $table->text('preview_image');
            $table->json('layout_data');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('layouts_keys');
    }
};
