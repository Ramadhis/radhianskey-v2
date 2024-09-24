<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LayoutsKey;
use App\Models\User;
use Auth;
use DB;

class KeyboardTestController extends Controller
{
    public function index()
    {
        //return view
        return inertia('KeyboardTest');
    }

    public function keyboardTest($username_slug,$layout_slug){
        return inertia('KeyboardTest', [
            'usernameSlug' => $username_slug,
            'layoutSlug' => $layout_slug
        ]);
    }

    public function getLayoutTest(Request $req){
        // dd($req->query('uid'));
        try {
            if($req->uid == "default"){
                $get_id_admin = User::select("id")->where('roles', 'admin')->first();
                if($get_id_admin){
                    $get_layout = LayoutsKey::select('name','name_slug','description','layout_data')->where('id_user',$get_id_admin->id)
                    ->first();
                }
                return response()->json($get_layout);
            }else{
                $find_user = User::select("id")->where('name_slug', $req->usernameSlug)->first();
                if($find_user){
                    $get_layout = LayoutsKey::select('name','name_slug','description','layout_data')
                    ->where('name_slug', $req->layoutSlug)
                    ->where('id_user',$find_user->id)
                    ->where('publication_type','public')
                    ->first();
                    if($get_layout){
                        return response()->json($get_layout);
                    }else{
                        abort(404);
                    }

                }
            }
        } catch (Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ]);
        }
    }

    public function getListDefaultLayout(){
        try {
        	$get_id_admin = User::select("id")->where('roles', 'admin')->first();
        	$get_layout_default = null;
        	if($get_id_admin){
        	    $get_layout_default = LayoutsKey::select('uid','name','name_slug',"preview_image",DB::raw("date(updated_at) as updated_date"))
                ->where('publication_type','public')
                ->where('id_user',$get_id_admin->id)
                ->get();
        	}
        	return response()->json($get_layout_default);

        } catch (Throwable $th) {
          return response()->json([
            'message' => $th->getMessage(),
          ]);
        }
    }
}