<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseThemeData extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'case_theme_data',
    ];
}