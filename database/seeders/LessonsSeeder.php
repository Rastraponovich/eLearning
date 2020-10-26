<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LessonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('lessons')->insert($this->getData());
    }
    public function getData()
    {
        $objFaker = Faker\Factory::create('ru_RU');
        $data = [];
        for ($i = 0; $i < 20; $i++) {
            $data[] = [
                'title' => $objFaker->sentence($nbWords = 5, $variableNbWords = true),
                'content' => $objFaker->realText(mt_rand(100, 200)),
                'image' => $objFaker->imageUrl($width = 640, $height = 480),
                'description' => $objFaker->realText(mt_rand(50, 100)),
                'price' => $objFaker->randomNumber($nbDigits = NULL, $strict = false),
            ];
        }

        return $data;
    }
}
