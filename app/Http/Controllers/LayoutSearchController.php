<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LayoutSearchController extends Controller
{
    public function index(){
        return Inertia('LayoutSearch');
    }
}