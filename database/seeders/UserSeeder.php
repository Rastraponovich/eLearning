<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert($this->getData());
    }
    public function getData()
    {
        $objFaker = Faker\Factory::create('ru_RU');
        $data = [];
        for ($i = 0; $i < 20; $i++) {
            $data[] = [
                'name' => $objFaker->name,
                'email' => $objFaker->regexify('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}'),
                'age' => $objFaker->numberBetween($min = 18, $max = 99),
                'password' => $objFaker->randomNumber($nbDigits = 8, $strict = false),
            ];
        }

        return $data;
    }
}
