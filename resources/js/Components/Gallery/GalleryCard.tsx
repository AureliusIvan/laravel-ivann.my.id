import React from 'react'
import { useState } from 'react'

export default function GalleryCard(image: any) {
    return (
        <>
            <img
                key={image.id}
                src={image.image}
                alt={image.title}
                className='m-1 rounded-[5px] cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out'
            />
        </>
    )
}
