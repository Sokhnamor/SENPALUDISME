<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;

class RegionsSeeder extends Seeder
{
    public function run(): void
    {
        $regions = [
            ['name' => 'Région de Rabat-Salé-Kénitra', 'code' => 'RSK', 'description' => 'Nord-Ouest'],
            ['name' => 'Région de Casablanca-Settat', 'code' => 'CS', 'description' => 'Centre'],
            ['name' => 'Région de Fès-Meknès', 'code' => 'FM', 'description' => 'Nord-Est'],
            ['name' => 'Région de Marrakech-Safi', 'code' => 'MS', 'description' => 'Sud'],
            ['name' => 'Région de Béni Mellal-Khénifra', 'code' => 'BMK', 'description' => 'Centre'],
            ['name' => 'Région de Drâa-Tafilalet', 'code' => 'DT', 'description' => 'Sud-Est'],
            ['name' => 'Région de Guelmim-Oued Noun', 'code' => 'GON', 'description' => 'Sud'],
            ['name' => 'Région de Laâyoune-Sakia El Hamra', 'code' => 'LSEH', 'description' => 'Sahara'],
            ['name' => 'Région de Dakhla-Oued Ed-Dahab', 'code' => 'DED', 'description' => 'Sahara'],
            ['name' => 'Région de Tanger-Tétouan-Al Hoceïma', 'code' => 'TTAH', 'description' => 'Nord'],
            ['name' => 'Région de l\'Oriental', 'code' => 'OR', 'description' => 'Est'],
            ['name' => 'Région de Souss-Massa', 'code' => 'SM', 'description' => 'Sud-Ouest'],
        ];

        foreach ($regions as $region) {
            Region::create($region);
        }
    }
}

