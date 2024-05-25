<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KeyboardTestController extends Controller
{
    public function index()
    {
        //return view
        return inertia('KeyboardTest');
    }
}