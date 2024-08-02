<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use DB;

class RegisterController extends Controller
{
    public function store(Request $req) {
        $this->validate($req,[
            'name' => 'required|min:3|max:60',
            'email'     => 'required|min:3|email|max:60',
            'password'  => 'required|min:6|max:60',
            'confirm_password' => 'required|same:password|min:6|max:60'
        ]);

        $emailCheck = User::where(['email' => $req->email])->first();

        if(!$emailCheck) {
            $create = User::create([
                'name' => $req->name,
                'email' => $req->email,
                'password' => Hash::make($req->password),
                'profile_picture' => 'default.png',
                'roles' => 'member'
            ]);

        }else {
            return back()->withErrors([
                'email' => 'email has been used, try another email',
            ]);
        }

        if($create){
            $credentials = $req->only('email', 'password');
            //attempt to login
            if (Auth::attempt($credentials)) {
                //regenerate session
                $req->session()->regenerate();

                //redirect route dashboard
                // return to_route('creative');
                return back()->with(['status' => "success",'message'=>'Success create account & sign-in !']);
            }

            //if login fails
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
        }
        return back()->withErrors([
            'email' => 'error',
        ]);

    }
}