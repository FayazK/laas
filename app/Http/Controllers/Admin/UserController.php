<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * Class UserController
 * @package App\Http\Controllers\Admin
 */
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return inertia('Admin/Users/Listing')->with('users', $users);
    }
}
