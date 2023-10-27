import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function GalleryPage({ images }: any) {
    return (
        <>
            <Head>
                <title>Gallery Config</title>
            </Head>
            <AdminLayout>
                <div
                    className='flex flex-col items-center justify-center w-full h-full'
                >
                    <h1
                        className='text-4xl font-bold text-center text-black'
                    >
                        Gallery Page
                    </h1>
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center w-full h-full'
                    >
                        {
                            images.map((image: any) => {
                                return (
                                    <EditGalleryCard
                                        {...image}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

// components for this page
const EditGalleryCard = (image: any) => {
    return (
        <div
            className='items-center justify-center
            bg-gray-200 rounded-lg shadow-xl p-boxS m-[2rem]'
        >
            <div>
                <img src={image.url} alt={image.title}
                    className='w-1/2 h-1/2'
                />
            </div>
        </div>
    )
}