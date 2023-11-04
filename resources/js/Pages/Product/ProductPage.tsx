import Header from '@/Components/General/Header'
import SectionContainer from '@/Components/General/SectionContainer'
import ProductCard from '@/Components/Product/ProductCard'
import Guest from '@/Layouts/GuestLayout'
import { PageProps } from '@/types'
import { Head, Link, usePage } from '@inertiajs/react'
import CollaborateCard from '@/Components/General/CollaborateCard'
import { useEffect } from 'react'
import WebscreenImage from "@/Assets/Images/webscreen.webp"

export default function ProductPage() {
    const ProductData: any = usePage().props.ProductData
    const pageInfo: any = usePage().props

    return (
        <>
            <Head>
                <title>
                    Posts
                </title>
                <meta name="description" content={
                    `Welcome to ${pageInfo?.companyData?.company_name} official website. ${pageInfo?.companyData?.company_description} 🏠`
                } />

                <meta name="keywords" content={
                    "blog, react.js, laravel, web, Aurelius Ivan Wijaya, Ivan, Universitas Multimedia Nusantara"
                } />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageInfo?.companyData?.company_name} />
                <meta property="og:description" content={`Welcome to ${pageInfo?.companyData?.company_name} official website. ${pageInfo?.companyData?.company_description} 🏠`} />
                <meta property="og:image" content={WebscreenImage} />
                <meta property="og:url" content="https://ivann.my.id/" />
            </Head>
            <Guest>
                <SectionContainer
                    className='w-full h-fit'
                >
                    <div
                        className='first-letter:capitalize
                        py-[2rem]'
                    >
                        <div
                            className='flex flex-col items-center justify-center w-full h-[fit-content]
                                        md:w-full 
                                        gap-[1rem]
                                        my-[1rem]
                                        relative isolate overflow-hidden'>
                            <h1
                                className='text-[#FFFFFF] text-[2rem] md:text-[3.75rem] font-[700] z-10 w-full text-center
                                bg-gradient-to-r from-secondary via-secondary to-primaryPink text-transparent bg-clip-text animate-gradient bg-300%
                                '
                            >
                                My Posts 👻 
                            </h1>

                            <h2
                                className='font-poppins text-center text-[1rem] 
                                font-[400] text-[rgba(255,255,255,0.7)]'
                            >
                                Hi! Check out my posts below 🐋
                            </h2>
                            <div
                                className='w-[70%] max-w-[8rem] h-[0.2rem] rounded-sm bg-white'
                            />
                        </div>
                        <div
                            className='h-fit pb-[4rem] md:p-[2rem] flex flex-wrap flex-col justify-center items-center gap-2 
                                    w-full md:gap-4 lg:gap-4 pt-[2rem]'>
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
