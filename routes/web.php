<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicPageController;

Route::get('/', [PublicPageController::class, 'home']);
Route::get('/layanan', [PublicPageController::class, 'layanan']);
Route::get('/kontak', [PublicPageController::class, 'kontak']);
Route::post('/kontak', [PublicPageController::class, 'submitContact']);
Route::get('/galeri', [PublicPageController::class, 'galeri']);
Route::get('/klien', [PublicPageController::class, 'klien']);
Route::get('/program', [PublicPageController::class, 'program']);
Route::get('/tentang', [PublicPageController::class, 'tentang']);
