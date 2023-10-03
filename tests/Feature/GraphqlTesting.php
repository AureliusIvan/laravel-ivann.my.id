<?php

namespace Tests\Feature;

use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use PHPUnit\Framework\TestCase;

class GraphqlTest extends TestCase
{
    use MakesGraphQLRequests;

    public function graphql_test(): void
    {

        $response = $this->graphQL('
        {
            users {
                id
                name
            }
        }
        ');
        // $this->assertTrue(true);
        $response->assertStatus(200);
    }
}