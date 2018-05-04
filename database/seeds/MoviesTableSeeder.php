<?php

use Illuminate\Database\Seeder;

use App\Movie;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          $faker = \Faker\Factory::create();
     
            // Create 5 movie records
            for ($i = 0; $i < 7; $i++) {
                Movie::create([
                    'title' => $faker->sentence($nbWords = 2, $variableNbWords = true),
                    'picture' => $faker->imageUrl($width = 640, $height = 480),
                    'description' => $faker->paragraph,
                    'year' => $faker->year($max = 'now'),
                    'rating' => $faker->randomElement($array = array ('PG-13','PG-18','G'))
                ]);
            }
    }
}
