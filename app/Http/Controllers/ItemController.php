<?php

namespace App\Http\Controllers;
use App\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    //

    public function index()
      {
        $items = Item::all();
        return $items->toJson();
      }
    public function new(Request $request)
    {
        print_r($request->input('title'));
        $item = new Item;
        $item->title = $request->input('title');
        $item->description = $request->input('description');
        $item->save();
        return redirect('/');

    }
    public function delete($id)
    {
        $res = Item::where('id',$id)->delete();
    }
    public function edit(Request $request,$id)
    {

        $res = Item::find($id);
        $res->title = $request->input('title');
        $res->description = $request->input('description');
        $res->save();
        return redirect('/');

    }

}
