<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    public function login(Request $req) {
        $this->validate($req,[
            'email'     => 'required|min:3|email|max:60',
            'password'  => 'required|min:6|max:60',
        ]);

        $credentials = $req->only('email', 'password');
        //attempt to login
        if (Auth::attempt($credentials)) {
            //regenerate session
            $req->session()->regenerate();
            //redirect route dashboard
            // return to_route('creative');
            return back()->with(['status' => "success",'message'=>'Sign-in success']);
        }

        //if login fails
        return back()->withErrors([
            'email' => 'Sign-in failed, please check your email or password.',
        ]);
    }

    public function destroy()
    {

        auth()->logout();

        return redirect("/")->with(['status' => "success",'message'=>'Sign-out success']);
    }
}