<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\LayoutKeyController;
use App\Http\Controllers\KeyboardTestController;
use App\Http\Controllers\KeyThemeController;
use App\Http\Controllers\CaseThemeController;
use App\Http\Controllers\LayoutSearchController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\EditAccountController;
use App\Http\Controllers\Auth\ForgotPasswordController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/create-layout', [LayoutKeyController::class, 'index'])->name('create.layout');
Route::get('/create-layout/{uid}', [LayoutKeyController::class, 'edit'])->name('edit.layout');
Route::get('/layout-search', [LayoutSearchController::class, 'index'])->name('search.layout');
Route::get('/', [KeyboardTestController::class, 'index'])->name('home');

Route::get('/get-layout-test', [KeyboardTestController::class, 'getLayoutTest'])->name('get-layout-test');

Route::post('/register', [RegisterController::class, 'store'])->name('register.store');
Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
Route::post('/update-account', [EditAccountController::class, 'update'])->name('account.update')->middleware('auth');
Route::get('/reset-password/{token}', [ForgotPasswordController::class, 'index'])->name('reset.password');
Route::post('/submit-forgot-password', [ForgotPasswordController::class, 'submitForgotPassword'])->name('forgot.password');
Route::post('/submit-reset-password', [ForgotPasswordController::class, 'submitResetPassword'])->name('submit.reset.password');

Route::post('/save-as', [LayoutKeyController::class, 'store'])->name('save-as')->middleware('auth');
Route::post('/open-layout', [LayoutKeyController::class, 'open'])->name('open-layout')->middleware('auth');
Route::post('/save', [LayoutKeyController::class, 'update'])->name('save')->middleware('auth');
Route::get('/list-layout', [LayoutKeyController::class,'getListLayout'])->name('layout.list')->middleware('auth');
Route::delete('/delete-layout/{id}', [LayoutKeyController::class,'deleteLayout'])->name('layout.delete')->middleware('auth');

Route::get('/get-default-layout', [KeyboardTestController::class, 'getListDefaultLayout'])->name('getListDefaultLayout');
Route::get('/key-theme/get-default-key-theme', [KeyThemeController::class, 'getDefaultKeyTheme'])->name('getDefaultKeyTheme');
Route::prefix('key-theme')->name('key-theme.')->middleware(['auth'])->group(function(){
    Route::get('/', [KeyThemeController::class, 'index'])->name('index');
    Route::post('/update', [KeyThemeController::class, 'update'])->name('update');
    Route::get('/key-theme-byId', [KeyThemeController::class, 'getKeyThemeById'])->name('getKeyThemeById');
});

Route::get('/case-theme/get-default-case-theme', [CaseThemeController::class, 'getDefaultCaseTheme'])->name('getDefaultCaseTheme');
Route::prefix('case-theme')->name('case-theme.')->middleware(['auth'])->group(function(){
    Route::get('/case-theme-byId', [CaseThemeController::class, 'getCaseThemeById'])->name('getCaseThemeById');
    Route::post('/update', [CaseThemeController::class, 'update'])->name('update');
});

// this must in bottom script, because this route not have wildcard, and have 2 bind data
Route::get('/{username_slug}/{layout_slug}', [KeyboardTestController::class, 'keyboardTest'])->name('keyboard-test');