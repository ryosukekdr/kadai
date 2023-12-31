<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Profile;

class ProfileController extends Controller
{
     public function index(Request $request)
    {
        $posts = Profile::all();
        // if (count($posts) > 0) {
        //     $headline = $posts->shift();
        // } else {
        //     $headline = null;
        // }
        //dd($posts);
        // profile/index.blade.php ファイルを渡している
        // また View テンプレートに headline、 posts、という変数を渡している
        return view('profile.index', ['posts' => $posts]);
    }
    
}
