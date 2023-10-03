<?php

namespace Tests\Unit;

use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
// use PHPUnit\Framework\TestCase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Tests\CreatesApplication;

class GraphqlTest extends BaseTestCase
{
    use MakesGraphQLRequests;
    use CreatesApplication;

    public function graphql_testing(): void
    {
        $response = $this->graphQL('
        {
            users {
                id
                name
            }
        }
        ');
        $response->assertStatus(200);
    }
}
