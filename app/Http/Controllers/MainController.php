<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KeyThemeData;
use App\Models\User;

class MainController extends Controller
{
    public function index()
    {
        $get_id_admin = User::select("id")->where('roles', 'admin')->first();
        if($get_id_admin){
            $get_key_theme_global = KeyThemeData::where('id_user',$getIdAdmin->id)->first();
        }
        //return view
        return inertia('Main',['getKeyThemeGlobal' => $get_key_theme_global->key_theme_data]);
    }
}