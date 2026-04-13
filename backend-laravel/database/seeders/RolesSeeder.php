<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['name' => 'admin', 'permissions' => json_encode(['*' => true])],
            ['name' => 'laboratoire', 'permissions' => json_encode(['captures.create' => true, 'captures.read' => true])],
            ['name' => 'chercheur', 'permissions' => json_encode(['data.read' => true, 'reports.create' => true])],
            ['name' => 'sentinelle', 'permissions' => json_encode(['sites.manage' => true])],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}

