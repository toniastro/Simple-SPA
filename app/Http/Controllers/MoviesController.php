<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Movie;
 
class MoviesController extends Controller
{
 
    public function index()
    {
        return Movie::all();
    }
 
    public function show(Product $movie)
    {
        return $movie;
    }
 
    public function store(Request $request)
    {
        $this->validate($request, [
        'title' => 'required|unique:movies|max:255',
        'picture' => 'required',
        'description' => 'required',
        'year' => 'integer',
        'rating' => 'required',
    ]);
        $movie = Movie::create($request->all());
 
        return response()->json($movie, 201);
    }
 
 
}