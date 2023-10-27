import Authenticated from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import React, { useEffect } from 'react'
// import { Inertia } from '@inertiajs/inertia'
import ProductEditCard from '@/Components/Admin/Product/ProductEditCard';
import ProductAddCard from '@/Components/Admin/Product/ProductAddCard'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from '@inertiajs/react'
import SectionContainer from '@/Components/General/SectionContainer'
// import ProductEditCard from '@/Components/Admin/Product/ProductEditCard'

export default function ProductPage({ auth, ProductData }: PageProps<{ ProductData: any }>) {
    useEffect(() => {
        console.log(ProductData)
    }, [])

    return (
        <AdminLayout>
            <div
                className='Heading
                    flex flex-col items-center justify-center
                    bg-secondary shadow-md p-boxS w-full'
            >
                <h1
                    className='text-white text-4xl font-semibold mb-3'
                >
                    Website Configurations
                </h1>
                <p
                    className='text-primaryWhite'
                >
                    Edit your website configurations here
                </p>
                {/* search bar */}
                <div className=" w-full top-[5rem] flex z-20">
                    <div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none border-l border-t border-b">
                        <svg className="w-4 h-4 text-primaryBlack dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="w-full" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="bg-green text-white p-boxS">Search</button>
                </div>
            </div>
            <div
                className='w-full flex flex-col justify-center items-center gap-3 relative p-boxS'
            >
                <Link
                    href={route('admin.portofolio.addpage')}
                    className='text-white font-bold bg-green 
                    px-boxMd py-boxS rounded-lg fixed bottom-[3rem] right-[2rem]
                    hover:bg-opacity-50'
                >
                    Add Product +
                </Link>
                <div
                    className='justify-center gap-3
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                        '
                >
                    {
                        ProductData.length > 0 ?
                            ProductData?.map((product: any) => {
                                return (
                                    <ProductEditCard
                                        key={product.id}
                                        {...product}
                                    />
                                )
                            })
                            :
                            <div
                                className='text-center w-full text-primaryBlack'
                            >
                                No data
                            </div>
                    }
                </div>
            </div>
        </AdminLayout >
    )
}


// ProductPage.layout = (page: React.ReactNode) => <Authenticated>{page}</Authenticated>
