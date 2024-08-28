<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\KeyThemeData;
use Auth;

use stdClass;

class KeyThemeController extends Controller
{
    public function index(){
        $find_key_theme = KeyThemeData::where('id_user',Auth::user()->id)->first();
        if($find_key_theme == null){
            //return empty json
            $find_key_theme = json_encode([]);
        }else {
            $find_key_theme = $find_key_theme->key_theme_data;
        }
        return response()->json($find_key_theme);
    }

    public function getDefaultKeyTheme(){
        try {
            $get_id_admin = User::select("id")->where('roles', 'admin')->first();
            if($get_id_admin){
                return $get_key_theme_default = KeyThemeData::where('id_user',$get_id_admin->id)->first();
            }

            return response()->json($get_key_theme_default->key_theme_data);
        } catch (Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function getKeyThemeById(){
        $get_key_theme = KeyThemeData::where('id_user',Auth::user()->id)->first();
        return response()->json($get_key_theme->key_theme_data);
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
        return back()->with(['status' => "success",'message'=>'Success']);
    }
}