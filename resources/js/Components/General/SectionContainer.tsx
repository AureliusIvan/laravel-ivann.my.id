import React from 'react'


type Props = {
    children: React.ReactNode,
    className?: string
}

export default function SectionContainer({ children, className }: Props) {
    return (
        <div
            className={`px-[1.25rem]
            sm:px-[1.5rem]
            md:px-[2.25rem]
            lg:px-[4.25rem]
            xl:px-[6.25rem]
            w-full
            ${className}
            `}
        >
            {children}
        </div>
    )
}
