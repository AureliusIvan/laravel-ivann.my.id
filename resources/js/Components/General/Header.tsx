import React from 'react'

type Props = {
    title: string,
    image?: string,
    createdAt?: string
}

export default function Header({ title, image, createdAt }: Props) {
    return (

        <div
            className='flex flex-col items-center justify-center
                    w-full h-[fit-content]
                     md:w-full 
                    relative isolate overflow-hidden'
        >
            <div
                className='w-fit flex flex-col items-center justify-center   mb-[1rem]'
            >
                <h1
                    className='text-[#FFFFFF] text-[1.5rem] md:text-[3.75rem] font-[700] z-10 w-full text-center'
                >
                    {title}
                </h1>

                <h2
                    className='font-poppins text-center text-[1rem] 
                                font-[400] text-[rgba(255,255,255,0.7)]'
                >
                    {createdAt}
                </h2>
            </div>
            <div
                className='w-[70%] max-w-[8rem] h-[0.2rem] rounded-sm bg-white'
            />
        </div>
    )
}
