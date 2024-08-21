<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CaseThemeData;
use App\Models\User;
use Auth;

class CaseThemeController extends Controller
{
    public function update(Request $req){
        // $this->validate($req,[
        //     'name' => 'required|min:3|max:60',
        //     'description'  => 'max:300',
        //     'layout_data'  => 'required',
        //     'preview_image'  => 'required',
        // ]);

        $find = CaseThemeData::where('id_user',Auth::user()->id)->first();

        if($find){
            //update
            $update = CaseThemeData::where('id_user',Auth::user()->id)->update([
                'case_theme_data' => json_encode($req->caseThemeData),
            ]);
        }else {
            //create
            $create = CaseThemeData::create([
                'id_user' => Auth::user()->id,
                'case_theme_data' => json_encode($req->caseThemeData),
            ]);
        }
        return back()->with(['status' => "success",'message'=>'Success']);
    }

    public function getCaseThemeById(){
        $get_case_theme = CaseThemeData::where('id_user',Auth::user()->id)->first();
        return response()->json($get_case_theme->case_theme_data);
    }

    public function getDefaultCaseTheme(){
        try {
            $get_id_admin = User::select("id")->where('roles', 'admin')->first();
            if($get_id_admin){
                return $get_case_theme_default = CaseThemeData::where('id_user',$get_id_admin->id)->first();
            }
            return response()->json($get_case_theme_default->case_theme_data);
        } catch (Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ],$th->getCode());
        }
    }
}