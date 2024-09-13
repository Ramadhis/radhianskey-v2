<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

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

    public function user() {
        return $this->hasOne(User::class, 'id', 'id_user');
    }
}