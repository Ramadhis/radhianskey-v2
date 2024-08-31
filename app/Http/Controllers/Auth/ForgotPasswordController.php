<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Mail;
use App\Mail\SendEmail;
use App\Models\PasswordReset;
use Carbon\Carbon;
use Hash;
use Illuminate\Support\Str;
use Auth;

class ForgotPasswordController extends Controller
{
    public function index($token){
        $findwithToken = PasswordReset::where('token', $token)->first();

        if($findwithToken){
            return inertia('auth/ResetPassword', ['token' => $token]);
        }else{
            return abort(404);
        }
    }

    public function submitForgotPassword (Request $req) {
        $this->validate($req, [
            'email'     => 'required|email|exists:users|max:40',
        ],[
            'email.exists' => 'The provided credentials do not match our records.',
        ]);
        $token = Str::random(64);
        $data = [
            'subject' => 'Forgot password',
            'body' => '',
            'token' => $token,
        ];
        try {
            Mail::to($req->email)->send(new SendEmail($data));
            // return response()->json(['oke aja']);
            PasswordReset::create([
                'email' => $req->email,
                'token' => $token,
                'created_at' => Carbon::now()
            ]);

            return back()->with(['status' => "success",'message'=>'We have e-mailed your password reset link!. check your email']);
        } catch (Exception $th) {
            // return response()->json(['err']);
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
        }
    }

    public function submitResetPassword(Request $req) {

        $req->validate([
            'password' => 'required|string|min:6|max:60',
            'confirm_password' => 'required|same:password|min:6|max:60'
        ]);

        $findwithToken = PasswordReset::where('token', $req->token)->first();
        if($findwithToken){
            $updatePassword = User::where('email', $findwithToken->email)->update(['password' => Hash::make($req->password)]);
            //get email and password from request

            if (Auth::attempt(['email' => $findwithToken->email, 'password' => $req->password])) {
                PasswordReset::where(['email'=> $findwithToken->email])->delete();
                //regenerate session
                $req->session()->regenerate();

                //redirect route dashboard
                // return to_route('creative');
                // return redirect('/creative-mode')->with('success', 'Success change Account password!');
                return redirect('/')->with(['status' => "success",'message'=>'Success change Account password!']);
            }
        }

        return back()->withErrors([
            'password' => 'invalid token',
        ]);
        // return true;
    }
}