import React from 'react'

type Props = {
    title: string,
    image?: string
}

export default function Header({ title, image }: Props) {
    return (
        <div>
            <div
                className='Heading
                    flex flex-col items-center justify-center
                    w-full h-[7.5rem] 
                    md:h-[10rem] md:w-full
                    relative isolate overflow-hidden 
                    '
            >
                <div
                    className='w-fit flex flex-col items-center justify-center gap-[0.7rem]'
                >
                    <h1
                        className='text-[#FFFFFF] text-[1.5rem] md:text-[3.75rem] font-[700] z-10 w-full text-center'
                    >
                        {title}
                    </h1>

                    <div
                        className='w-[70%] max-w-[7rem] h-[0.2rem] rounded-sm bg-white'
                    />
                </div>
            </div>
        </div>
    )
}
