<?php

namespace Database\Seeders;

use App\Models\SentinelSite;
use App\Models\Region;
use Illuminate\Database\Seeder;

class SitesSeeder extends Seeder
{
    public function run(): void
    {
        $regionIds = Region::pluck('id')->toArray();
        
        $sites = [
            ['name' => 'Lab Central Rabat', 'region_id' => $regionIds[0], 'type' => 'lab', 'lat' => 34.01, 'lng' => -6.84, 'address' => 'Rabat Centre', 'contact_phone' => '+212600000001', 'lab_equipment' => 'Microscopes, PCR'],
            ['name' => 'Site Sentinelle Casablanca', 'region_id' => $regionIds[1], 'type' => 'field', 'lat' => 33.57, 'lng' => -7.58, 'address' => 'Casablanca', 'contact_phone' => '+212600000002'],
            ['name' => 'Hopital Fès', 'region_id' => $regionIds[2], 'type' => 'hospital', 'lat' => 34.04, 'lng' => -5.00, 'address' => 'Fès', 'contact_phone' => '+212600000003'],
        ];

        foreach ($sites as $site) {
            SentinelSite::create($site);
        }
    }
}

