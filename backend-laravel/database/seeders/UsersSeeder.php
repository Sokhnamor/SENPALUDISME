<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Region;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::where('name', 'admin')->first();
        $labRole = Role::where('name', 'laboratoire')->first();
        $regionRabat = Region::where('code', 'RSK')->first();

        User::create([
            'name' => 'Admin PNLP',
            'email' => 'admin@pnlp.ma',
            'password' => Hash::make('password'),
            'role_id' => $adminRole->id,
            'region_id' => $regionRabat->id,
            'phone' => '+212600000000',
        ]);

        User::create([
            'name' => 'Lab Tech Rabat',
            'email' => 'lab@rabat.ma',
            'password' => Hash::make('password'),
            'role_id' => $labRole->id,
            'region_id' => $regionRabat->id,
            'phone' => '+212600000001',
        ]);
    }
}

