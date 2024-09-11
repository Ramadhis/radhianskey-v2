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

    public function getLayoutSearch() {
        $page = 1;
        $get_layout = LayoutsKey::select('id','uid','name','name_slug',"preview_image",DB::raw("date(updated_at) as updated_date"))
        ->paginate($perPage = 20, $columns = ['*'],'page',$page)
        ->onEachSide(1)
        ->links();

        return response()->json($get_layout->paginator);
    }
}