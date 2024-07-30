<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login() {}

    public function destroy()
    {
        auth()->logout();

        return back()->with('success', 'Logout Berhasil !');
    }
}
