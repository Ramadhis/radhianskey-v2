<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KeyThemeData;
use Auth;

class KeyThemeController extends Controller
{
    public function index(){
        $find_key_theme = KeyThemeData::where('id_user',Auth::user()->id)->first();
        return response()->json($find_key_theme);
    }

    public function update(Request $req){
        // $this->validate($req,[
        //     'name' => 'required|min:3|max:60',
        //     'description'  => 'max:300',
        //     'layout_data'  => 'required',
        //     'preview_image'  => 'required',
        // ]);

        $find = KeyThemeData::where('id_user',Auth::user()->id)->first();

        if($find){
            //update
            $update = KeyThemeData::where('id_user',Auth::user()->id)->update([
                'key_theme_data' => json_encode($req->keyThemeData),
            ]);
        }else {
            //create
            $create = KeyThemeData::create([
                'id_user' => Auth::user()->id,
                'key_theme_data' => json_encode($req->keyThemeData),
            ]);
        }
        return back()->with(['status' => "success",'message'=>'Success save Theme']);

    }
}