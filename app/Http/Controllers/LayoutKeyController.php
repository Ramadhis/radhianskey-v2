<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\LayoutsKey;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Auth;
use File;

class LayoutKeyController extends Controller
{
    public function index()
    {
        //return view
        return inertia('Main');
    }

    public function edit($uid) {
        $layoutData = LayoutsKey::where('uid',htmlspecialchars($uid))->first();

        return inertia('Main',['data' => $layoutData]);
    }

    public function store(Request $req){
        $this->validate($req,[
            'name' => 'required|min:3|max:60',
            'description'  => 'max:300',
            'layout_data'  => 'required',
            'preview_image'  => 'required',
        ]);

        $fileName="default.png";
        if ($req->preview_image) {
            $folderPath = "images/preview_layout/";
            $base64Image = explode(";base64,", $req->preview_image);
            $explodeImage = explode("image/", $base64Image[0]);
            $imageType = $explodeImage[1];
            $image_base64 = base64_decode($base64Image[1]);

            $fileName = uniqid() . '.'.$imageType;
            $saveFileTo = $folderPath . $fileName;

            //check for directory/folder
            $directoryPath = public_path().'/images/preview_layout';
            File::isDirectory($directoryPath) or File::makeDirectory($directoryPath, 0777, true, true);

            try {
                file_put_contents($saveFileTo, $image_base64);
            } catch (Throwable $e) {
                return back()->with(['error'=> $e]);
            }
        }

        $create = LayoutsKey::create([
            'uid' => Str::random(16),
            'id_user' => Auth::user()->id,
            'name' => htmlspecialchars($req->name),
            'name_slug' => Str::slug(htmlspecialchars($req->name)),
            'description' => htmlspecialchars($req->description),
            'preview_image' => $fileName,
            'layout_data' => json_encode($req->layout_data),
        ]);

        if($create){
            return back()->with(['status' => "success",'message'=>'Save-as success', 'data' => [
                'uid' => $create->uid
            ]]);
        }
    }

    public function update(Request $req) {
        $this->validate($req,[
            'uid' => 'required',
            'name' => 'required|min:3|max:60',
            'description'  => 'max:300',
            'layout_data'  => 'required',
            'preview_image'  => 'required',
        ]);

        $findData = LayoutsKey::where('uid', $req->uid)->first();

        if($findData){
            $fileName = "";
            if ($req->preview_image) {
                $folderPath = "images/preview_layout/";
                $folderPathOld = public_path()."/images/preview_layout/";
                //delete old image
                $file_old = $folderPathOld.$findData->preview_image;

                if(file_exists($file_old)){
                    unlink($file_old);
                }

                //upload new image
                $base64Image = explode(";base64,", $req->preview_image);
                $explodeImage = explode("image/", $base64Image[0]);
                $imageType = $explodeImage[1];
                $image_base64 = base64_decode($base64Image[1]);

                $oldFileName = explode(".",$findData->preview_image);
                $fileName = $oldFileName[0] . '.'.$imageType;
                $saveFileTo = $folderPath . $fileName;

                //check for directory/folder
                $directoryPath = public_path().'/images/preview_layout';
                File::isDirectory($directoryPath) or File::makeDirectory($directoryPath, 0777, true, true);

                try {
                    file_put_contents($saveFileTo, $image_base64);
                } catch (Throwable $e) {
                    return back()->with(['error'=> $e]);
                }
            }

            $update = LayoutsKey::where('uid',$req->uid)->update([
                'name' => htmlspecialchars($req->name),
                'name_slug' => Str::slug(htmlspecialchars($req->name)),
                'description' => htmlspecialchars($req->description),
                'preview_image' => $fileName,
                'layout_data' => json_encode($req->layout_data),
            ]);

            if($update){
                return back()->with(['status' => "success",'message'=>'Save success']);
            }

            return back()->withErrors([
                'message' => 'Update failed',
            ]);
        }
    }
}