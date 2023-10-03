import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import "@/Styles/Gallery/GalleryPage.scss"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import GalleryCard from '@/Components/Gallery/GalleryCard'

export default function GalleryPage({ images }: any) {
    return (
        <>
            <Head>
                <title>Gallery</title>
            </Head>
            <Guest>
                <div
                    className='
                    GalleryPage'
                >
                    <div
                        className='Heading
                    flex flex-col items-center justify-center
                    bg-yellow-950 shadow-md p-5 w-full
                    '
                    >
                        <h1
                            className='text-white text-4xl font-semibold mb-3'
                        >Gallery
                        </h1>
                        <p
                            className='text-gray-400'
                        >
                            This is Gallery Page for showing all the products
                        </p>
                    </div>
                    <div
                        className='GalleryPhotoContainer'
                    >
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
                        >
                            <Masonry>
                                {
                                    images.map((image: any) => {
                                        return (
                                            <GalleryCard
                                                {...image}
                                            />
                                        )
                                    })
                                }
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </Guest>
        </>
    )
}
