<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Admin/Dashboard');
});

Route::prefix('users')->controller(UserController::class)->group(function () {
    Route::get('/', 'index')->name('users');
});
