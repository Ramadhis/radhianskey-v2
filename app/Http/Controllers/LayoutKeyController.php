<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class LayoutKeyController extends Controller
{
    public function index()
    {
        //return view
        return inertia('Main');
    }

    public function save(Request $req){
        $this->validate($req,[
            'name'     => 'required|min:3|email|max:60',
            'description'  => 'min:6|max:300',
            'layout_data'  => 'required',
            'preview_image'  => 'required',
        ]);
    }
}