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

    useEffect(() => {
        console.log(ProductData)
    }, [])
    return (
        <>
            <Head>
                <title>
                    Portofolio
                </title>
                <meta name="description" content="Product" />
                <meta name="keywords" content="Product" />
            </Head>
            <Guest>
                <SectionContainer
                    className='w-full h-fit'
                >
                    <Header
                        title='Project & Portofolio'
                    />
                    <div
                        className='
                        h-fit
                        pb-[4rem] md:p-[2rem]
                        grid grid-cols-1 justify-center items-center gap-2
                        w-full md:grid-cols-2 md:gap-4 
                        lg:grid-cols-3 lg:gap-4 pt-[2rem]'>
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
                    <div
                        className=' flex-row justify-center items-center w-full flex-wrap hidden text-primaryBlack'
                    >
                        {ProductData.links ? ProductData.links.map((link: any) => {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={`p-2 m-2 border-2 rounded-md shadow-sm m-y shadow-red-100  ${link.active && "text-white bg-black"}`}
                                >
                                    {`${link.label}`}
                                </Link>
                            )
                        })
                            : <div
                                className='text-center w-full'
                            >
                                No data here yet
                            </div>
                        }
                    </div>
                    {/* <CollaborateCard /> */}
                </SectionContainer>
            </Guest>
        </>
    )
}
