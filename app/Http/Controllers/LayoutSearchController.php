<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LayoutsKey;
use DB;

class LayoutSearchController extends Controller
{
    public function index(){
        return Inertia('LayoutSearch');
    }

    public function getLayoutSearch(Request $req) {
        $page = $req->get('page') ? (int)$req->get('page') : 1;
        $q = $req->get('q') ? htmlspecialchars(strtolower($req->get('q'))) : "";
        $sort = $req->get('sort') ? htmlspecialchars(strtolower($req->get('sort'))) : "desc";

        $get_layout = LayoutsKey::select('id','id_user','name','name_slug',"preview_image",DB::raw("date(updated_at) as updated_date"))
        ->where(function ($query) use ($q) {
            return $query->orWhere('name', 'like', '%'.$q.'%')->orWhere('description', 'like', '%'.$q.'%');
        })
        ->with('user')
        ->orderBy('id', $sort)
        ->paginate($perPage = 21, $columns = ['*'],'page',$page)
        ->onEachSide(1)
        ->links();

        return response()->json($get_layout->paginator);
    }
}