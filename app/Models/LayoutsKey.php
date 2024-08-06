<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LayoutsKey extends Model
{
    use HasFactory;
    protected $fillable = [
        'uid',
        'id_user',
        'name',
        'name_slug',
        'description',
        'preview_image',
        'layout_data'
    ];
}