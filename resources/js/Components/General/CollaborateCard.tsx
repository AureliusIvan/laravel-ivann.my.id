import { usePage } from '@inertiajs/react';
import React from 'react'

export default function CollaborateCard() {
    const companyData: any = usePage().props.companyData; //get page info
    return (
        <div
            className='w-full
            
            flex flex-col items-center justify-center
            rounded-[0.75rem]  
            p-[3.75rem] gap-[0.75rem] md:gap-[1.5rem]
            md:h-[30rem]
            mt-[2rem]
            relative
            overflow-hidden
            bg-[#E8DCCAC4]
            '
        >

            <img
                src={companyData.home_banner}
                className="absolute inset-0 w-full h-full object-cover object-center z-[-1] isolate
                "
            />
            <h2
                className='text-[2rem] md:text-[3.5rem] font-[700] text-center text-black'
            >
                Want to collaborate?
            </h2>
            <p
                className='text-[1rem] md:text-[2rem] text-center text-[#383323] font-[500]'
            >
                We create innovative and functional designs.
            </p>
            <button className="btn bg-[#383323]">
                <span
                    className='flex items-center justify-center gap-2.5
                            font-[600] text-[0.875rem] md:text-[1.5rem] text-[white]'
                >
                    Contact us
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        className='w-[0.875rem] md:w-[1.5rem] h-[0.875rem] md:h-[1.5rem] '
                    >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"
                            className='fill-[white]'
                        />
                    </svg>
                </span>
            </button>
        </div>
    )
}
