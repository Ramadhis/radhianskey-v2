<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseThemeData extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'key_theme_data',
    ];
}