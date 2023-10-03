import { PageProps } from '@/types'
// import { Button } from 'antd'
// import { EuiButton as Button, EuiFieldText as Input } from '@elastic/eui'
import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';



const GET_PRODUCT = gql`
  query GetProduct {
    products{
        data{
            id
            title
            slug
            
        }
    }
}
`;

// display using react-apollo graphql
const DisplayProducts = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{"Error :("}</p>;

    return data.products.data.map(({ id, title, slug }: any) => (
        <div key={id}>
            <p>
                {title}: {slug}
                
            </p>
        </div>
    ));
}

export default function TestingPage({ webconfigs }: PageProps<{ webconfigs: any }>) {
    const { data, loading } = useQuery(GET_PRODUCT)
    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <div
            id="testing-page"
            className="py-12 text-black flex flex-col justify-center sm:py-12 items-center"
        >
            <h1
                className='text-4xl font-bold text-black'
            >
                Testing Page
            </h1>
            <DisplayProducts />
        </div>
    )
}


