<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Radhians',
            'name_slug' => 'radhians',
            'email' => 'admin@radhianskey.my.id',
            'password' => Hash::make('123123123'),
            'profile_picture' => 'default.png',
            'roles' => 'admin',
        ]);
    }
}