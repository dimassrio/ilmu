<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'SystemController@index')->before('dashboard');
Route::post('login', 'UsersController@login')->before('guest');;
Route::get('logout', 'UsersController@logout')->before('auth');;
Route::get('dashboard', 'SystemController@dashboard');
Route::get('courses/{id}/enroll', 'CoursesController@enroll');
Route::resource('users', 'UsersController');
Route::post('courses/{id}/edit', 'CoursesController@update');
Route::resource('courses', 'CoursesController');
Route::get('register', 'UsersController@register');
Route::post('register', 'UsersController@save_register');
Route::resource('materials', 'MaterialsController');
Route::get('references', 'SystemController@references');
Route::get('about', 'SystemController@about');
Route::get('materials/{id}/add', 'MaterialsController@add');
Route::get('materials/{id}/addbulks', 'MaterialsController@addBulk');
Route::post('materials/{id}/addbulks', 'MaterialsController@addBulks');
Route::post('materials/{id}/add/content', 'MaterialsController@addContent');
Route::post('materials/{id}/add/pdf', 'MaterialsController@addPdf');
Route::post('materials/{id}/add/video', 'MaterialsController@addVideo');
Route::post('materials/{id}/add/presentation', 'MaterialsController@addPresentation');
Route::post('materials/{id}/add/audio', 'MaterialsController@addAudio');
Route::post('materials/{id}/add/exercise', 'MaterialsController@addExercise');
Route::get('courses/{idc}/materials/{order}', 'MaterialsController@showCourseMaterial');
Route::get('courses/{id}/enroll', 'CoursesController@enroll');
Route::post('courses/{idc}/materials/{order}/answers', 'MaterialsController@showCourseMaterialAnswers');

Route::get('reports', 'SystemController@report');