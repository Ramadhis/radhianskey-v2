<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use File;

class EditAccountController extends Controller
{
    public function update(Request $req) {

      //with profile picture upload
      $this->validate($req,[
          'email'     => 'required|min:3|email|max:60',
          'name' => 'required|min:3|max:60',
      ]);

	  if($req->profile_picture != null){
        //update profile picture
        $this->validate($req,[
          'profile_picture' => 'max:3000|mimes:png,jpg,jpeg', //a required, max 3000kb, png,jpg or jpeg,
        ]);

        $fileName = time().'.'.$req->profile_picture->extension();

        //check for directory/folder
        $directoryPath = public_path().'/images/profile_picture';
        File::isDirectory($directoryPath) or File::makeDirectory($directoryPath, 0777, true, true);

        //delete old image
        if(Auth::user()->profile_picture != "default.png") {
            $file_old = $directoryPath.'/'.Auth::user()->profile_picture;
            if(file_exists($file_old)){
                unlink($file_old);
            }
        }

        //upload new image
        $req->profile_picture->move(public_path('/images/profile_picture'), $fileName);

        //update profile picture
        User::where('id', Auth::user()->id)->update(['profile_picture'=> $fileName, 'name' => $req->name]);
      }

      //email update
      if($req->email == Auth::user()->email){
        return back()->with(['status' => "success",'message'=>'Update success']);
      }else {
        //check if email duplicate in database
        $userCheck = User::where(['email' => $req->email])->first();
        if($userCheck == null){
          $update = User::where('id', Auth::user()->id)->update(['email' => $req->email]);
          return back()->with(['status' => "success",'message'=>'Update success']);
        }else {
          //return back if email duplicate
          return back()->withErrors([
            'email' => 'Email has been used, try another email',
          ]);
        }
      }
    }
}