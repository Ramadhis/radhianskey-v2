<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\LayoutsKey;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Auth;
use File;
use DB;

class LayoutKeyController extends Controller
{
    public function index()
    {
        //return view
        return inertia('Main');
    }

    public function edit($uid) {
        $layoutData = LayoutsKey::where('uid',htmlspecialchars($uid))->where("id_user",Auth::user()->id)->first();
        return inertia('Main',['data' => $layoutData]);
    }

    public function getListLayout(){
        try {
            $list_layout = LayoutsKey::select('uid','name','name_slug',"preview_image",DB::raw("date(updated_at) as updated_date"))
            ->where('id_user', Auth::user()->id)
            ->get();

            return response()->json($list_layout);
        } catch (Throwable $th) {
            return response()->json([
                'message' => "error",
            ],404);
        }
    }

    public function deleteLayout($id){
        try {
            $find = LayoutsKey::where(["uid"=> $id])->first();
            if($find) {
                //delete image
                $folderPath = "images/preview_layout/";
                $folderPathOld = public_path()."/images/preview_layout/";
                $file = $folderPathOld.$find->preview_image;

                if(file_exists($file)){
                    unlink($file);
                }
            }
            $delete = LayoutsKey::where(["uid"=> $id, "id_user" => Auth::user()->id])->delete();
            return response()->json($delete);
        } catch (Throwable $th) {
            return response()->json([
                'message' => "error",
            ],404);
        }
    }

    public function store(Request $req){
        $this->validate($req,[
            'name' => 'required|min:3|max:60',
            'description'  => 'max:300',
            'layout_data'  => 'required',
            'preview_image'  => 'required',
        ]);

        $slug_name = Str::slug(htmlspecialchars(strtolower($req->name)));
        $find_duplicate_name = LayoutsKey::where(["name_slug"=> $slug_name, "id_user" => Auth::user()->id])->first();

        if($find_duplicate_name){
            return back()->withErrors([
                'name' => 'layout name is already in use, try another name',
            ]);
        }

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
            'name_slug' => $slug_name,
            'description' => htmlspecialchars($req->description),
            'preview_image' => $fileName,
            'layout_data' => json_encode($req->layout_data),
        ]);

        if($create){
            // return back()->with(['status' => "success",'message'=>'Save-as success', 'data' => [
            //     'uid' => $create->uid
            // ]]);

            return redirect('/create-layout/'.$create->uid)
            ->with([
                'status' => "success",
                'message'=>'Save-as success',
                'data' => ['uid' => $create->uid]]
            );
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

        $slug_name = Str::slug(htmlspecialchars(strtolower($req->name)));
        $find_duplicate_name = LayoutsKey::where(function($query) use ($slug_name) {
            $query->where("name_slug",$slug_name)->where("id_user",Auth::user()->id);
        })->where("uid","!=",$req->uid)->first();

        if($find_duplicate_name){
            return back()->withErrors([
                'name' => 'layout name is already in use, try another name',
            ]);
        }

        $findData = LayoutsKey::where('uid', $req->uid)->where("id_user",Auth::user()->id)->first();

        if($findData){
            $fileName = "";
            $newFileName = "";
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


                // $oldFileName = explode(".",$findData->preview_image);
                $newFileName = uniqid() . '.'.$imageType;
                // $fileName = $oldFileName[0] . '.'.$imageType;
                $saveFileTo = $folderPath . $newFileName;

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
                'preview_image' => $newFileName,
                'layout_data' => json_encode($req->layout_data),
            ]);

            if($update){
                return back()->with(['status' => "success",'message'=>'Save success']);
            }

            return back()->withErrors([
                'message' => 'Update failed',
            ]);
        }else{
            return back()->withErrors([
                'message' => 'please use your own layout',
            ]);
        }
    }

    public function open(Request $req) {
        return redirect('create-layout/'.$req->uid)
            ->with([
                'status' => "success",
                'message'=>'Success open layout',
                'data' => ['uid' => $req->uid]]
            );
    }
}