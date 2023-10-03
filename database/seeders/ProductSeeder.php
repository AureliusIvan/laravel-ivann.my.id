<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Products = DB::table('products');
        $Products->truncate(); //clear all data from table


        $count = 1;
        for ($i = 1; $i <= 1000; $i++) {
            $Products->insert([
                'title' => 'Kursi',
                'slug' => 'kursi',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Porttitor eget dolor morbi non arcu risus quis. Quis auctor elit sed vulputate. Neque sodales ut etiam sit amet. Rhoncus mattis rhoncus urna neque viverra justo nec. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Lectus vestibulum mattis ullamcorper velit sed. Eu sem integer vitae justo eget magna fermentum iaculis. Et netus et malesuada fames ac turpis egestas integer eget. Bibendum est ultricies integer quis auctor elit sed vulputate. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Gravida rutrum quisque non tellus orci ac auctor.

                Netus et malesuada fames ac. Faucibus a pellentesque sit amet porttitor eget. Est placerat in egestas erat imperdiet sed euismod nisi. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ut placerat orci nulla pellentesque dignissim enim sit. Aliquet risus feugiat in ante. Id diam maecenas ultricies mi eget. Vulputate mi sit amet mauris commodo quis imperdiet. Ante in nibh mauris cursus. Id cursus metus aliquam eleifend. Justo laoreet sit amet cursus sit amet dictum sit amet. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                
                Quis eleifend quam adipiscing vitae proin. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Pharetra vel turpis nunc eget lorem. Nibh mauris cursus mattis molestie a iaculis at erat. Quam id leo in vitae. Mattis rhoncus urna neque viverra justo nec. Nulla aliquet enim tortor at auctor urna nunc id cursus. Dignissim convallis aenean et tortor at risus viverra. Non diam phasellus vestibulum lorem. Pellentesque elit eget gravida cum sociis natoque. Neque viverra justo nec ultrices dui. Nunc vel risus commodo viverra maecenas accumsan. Felis imperdiet proin fermentum leo vel orci porta non. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Id leo in vitae turpis massa sed elementum tempus egestas. Habitant morbi tristique senectus et netus et malesuada fames ac. Scelerisque in dictum non consectetur. Odio ut sem nulla pharetra diam.
                
                Augue lacus viverra vitae congue. Mattis nunc sed blandit libero. In mollis nunc sed id semper risus. At tellus at urna condimentum mattis pellentesque id nibh tortor. At urna condimentum mattis pellentesque id nibh. Ante in nibh mauris cursus. Vitae suscipit tellus mauris a diam maecenas sed. Fames ac turpis egestas sed. Gravida quis blandit turpis cursus in hac habitasse. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Turpis egestas pretium aenean pharetra magna. Blandit turpis cursus in hac habitasse platea dictumst. Congue nisi vitae suscipit tellus mauris a diam. Diam quam nulla porttitor massa. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Ipsum dolor sit amet consectetur adipiscing. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Odio ut sem nulla pharetra.
                
                Sit amet purus gravida quis blandit turpis cursus in. Nibh sed pulvinar proin gravida hendrerit lectus. Nibh tortor id aliquet lectus. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Quis vel eros donec ac odio tempor orci dapibus ultrices. Consectetur libero id faucibus nisl. Orci ac auctor augue mauris augue. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Aliquam vestibulum morbi blandit cursus risus at. Rhoncus mattis rhoncus urna neque viverra. Nisl tincidunt eget nullam non.',
                'image_id' => $count,
                'price' => 100000,
            ]);
            $count++;
            if ($count == 9) {
                $count = 1;
            }
        }
    }
}
