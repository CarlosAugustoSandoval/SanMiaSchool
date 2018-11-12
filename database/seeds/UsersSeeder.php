<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rows = array(
            array(
                'name'=>'krlitozagusto',
                'email'=>'krlitozagusto@gmail.com',
                'password'=>bcrypt('Chantyyy12345'),
                'remember_token' => str_random(100),
            )
        );
        DB::table('users')->insert($rows);
    }
}
