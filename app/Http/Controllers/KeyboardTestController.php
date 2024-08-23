<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LayoutsKey;
use App\Models\User;
use Auth;

class KeyboardTestController extends Controller
{
    public function index()
    {
        //return view
        return inertia('KeyboardTest');
    }

    public function getLayoutTest(Request $req){
        // dd($req->query('uid'));
        try {
            if($req->uid == "default"){
                $get_id_admin = User::select("id")->where('roles', 'admin')->first();
                if($get_id_admin){
                    $get_layout = LayoutsKey::where('id', "134")
                    ->where('id_user',$get_id_admin->id)
                    ->first();
                }
                return response()->json($get_layout);
            }
        } catch (Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ],$th->getCode());
        }
    }
}