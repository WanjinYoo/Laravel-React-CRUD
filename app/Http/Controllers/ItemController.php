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

}
