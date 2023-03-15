<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/users', function () {
    return Inertia::render('Users', [
        'users' => User::all()->map(fn($user) => [
            'name' => $user->name,
            'email' => $user->email
        ])
    ]);
});
Route::get('/settings', function () {
    return Inertia::render('Settings');
});
