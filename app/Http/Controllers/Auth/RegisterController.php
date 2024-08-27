<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use DB;
use Str;

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
        $name_slug = Str::slug(htmlspecialchars(strtolower($req->name)));
        $name_slug_check = User::where(['name_slug' => $name_slug])->first();

        if(!$emailCheck && !$name_slug_check) {
            $create = User::create([
                'name' => $req->name,
                'name_slug' => $name_slug,
                'email' => $req->email,
                'password' => Hash::make($req->password),
                'profile_picture' => 'default.png',
                'roles' => 'member'
            ]);

        }else {
            if($emailCheck) {
                return back()->withErrors([
                    'email' => 'email has been used, try another email',
                ]);
            }
            if($name_slug_check) {
                return back()->withErrors([
                    'name' => 'Username has been used, make the name more unique using numbers',
                ]);
            }
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