<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/lessons', 'Api\LessonController@index');
Route::get('/lessons/{id}', 'Api\LessonController@show');
Route::post('/lessons', 'Api\LessonController@store');
Route::delete('/lessons/{id}', 'Api\LessonController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
