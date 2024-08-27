<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use File;
use Str;

class EditAccountController extends Controller
{
    public function update(Request $req) {

      //with profile picture upload
      $this->validate($req,[
          'email'     => 'required|min:3|email|max:60',
          'name' => 'required|min:3|max:30',
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
        User::where('id', Auth::user()->id)->update(['profile_picture'=> $fileName]);
      }

      //create slug name
      $name_slug = Str::slug(htmlspecialchars(strtolower($req->name)));

      //email update
      if($req->email == Auth::user()->email && $name_slug == Auth::user()->name_slug){
        return back()->with(['status' => "success",'message'=>'Update success']);
      }else {

        //check if email duplicate in database
        $userCheck = User::where(['email' => $req->email])->first();
        //check if name_slug duplicate in database
		$name_slug_check = User::where(['name_slug' => $name_slug])->first();

        $data_update = [];

        if($userCheck->id == Auth::user()->id){
          $data_update['email'] = $req->email;
        }else{
          //return back if email duplicate
          return back()->withErrors([
            'email' => 'Email has been used, try another email',
          ]);
        }

        if( $name_slug_check == null || $name_slug_check->id == Auth::user()->id){
          $data_update['name'] = $req->name;
          $data_update['name_slug'] = $name_slug;
        }else{
          return back()->withErrors([
            'name' => 'Username has been used, make the name more unique using numbers',
          ]);
        }

        if(count($data_update) > 0){
          $update = User::where('id', Auth::user()->id)->update($data_update);
          return back()->with(['status' => "success",'message'=>'Update success']);
        }
      }
    }
}