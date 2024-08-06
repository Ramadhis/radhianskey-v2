<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\LayoutKeyController;
use App\Http\Controllers\KeyboardTestController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\EditAccountController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/create-layout', [LayoutKeyController::class, 'index'])->name('create.layout');
Route::get('/create-layout/{uid}', [LayoutKeyController::class, 'edit'])->name('edit.layout');
Route::get('/keyboard-test', [KeyboardTestController::class, 'index'])->name('home');

Route::post('/register', [RegisterController::class, 'store'])->name('register.store');
Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
Route::post('/update-account', [EditAccountController::class, 'update'])->name('account.update')->middleware('auth');

Route::post('/save-as', [LayoutKeyController::class, 'store'])->name('save-as')->middleware('auth');
Route::post('/save', [LayoutKeyController::class, 'update'])->name('save')->middleware('auth');