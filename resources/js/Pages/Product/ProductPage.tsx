import Header from '@/Components/General/Header'
import SectionContainer from '@/Components/General/SectionContainer'
import ProductCard from '@/Components/Product/ProductCard'
import Guest from '@/Layouts/GuestLayout'
import { PageProps } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react'
import CollaborateCard from '@/Components/General/CollaborateCard'
import { useEffect } from 'react'

export default function ProductPage() {
    const ProductData: any = usePage().props.ProductData
    const pageInfo = usePage().props
    useEffect(() => {
        console.log(pageInfo)
        console.log(ProductData)
    }, [])
    return (
        <>
            <Head>
                <title>
                    Posts
                </title>
                <meta name="description" content="Posts" />
                <meta name="keywords" content="Posts" />
            </Head>
            <Guest>
                <SectionContainer
                    className='w-full h-fit'
                >
                    <div
                        className='first-letter:capitalize
                        py-[2rem]'
                    >
                        <Header
                            title='My Posts'
                        />
                        <div
                            className='
                        h-fit
                        pb-[4rem] md:p-[2rem]
                        flex flex-wrap flex-col
                        justify-center items-center gap-2
                        w-full md:gap-4 
                        lg:gap-4 pt-[2rem]'>
                            {
                                ProductData?.map((product: any) => {
                                    return (
                                        <ProductCard
                                            key={product.id}
                                            ProductData={product}
                                            height='13.5rem'
                                            rounded={true}
                                        />)
                                })
                            }
                        </div>
                    </div>
                </SectionContainer>
            </Guest>
        </>
    )
}
