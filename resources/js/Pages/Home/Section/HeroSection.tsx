// import Button from '@/Components/General/Button';
import Header from '@/Components/General/Header';
import SectionContainer from '@/Components/General/SectionContainer'
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import React from 'react'
// Icon 
import {
    BsFillFileImageFill as Porto,
    BsFillEnvelopeHeartFill as Mail,
    BsDownload as Download
} from "react-icons/bs"

type Props = {
    companyName: string,
    companyDescription: string
}

export default function HeroSection() {
    const companyData: any = usePage().props.companyData; //get page info
    return (
        <SectionContainer>
            <div
                className='flex flex-col items-center  
            w-full min-h-[35rem]
            h-fit py-[2rem]'
            >
                <h1
                    className='font-poppins font-[700] text-[2.25rem] md:text-[3.25rem]
                    xl:text-[6.25rem]  inline-flex
                text-secondary capitalize'
                >
                    {companyData.company_name}
                </h1>
                <p
                    className='font-poppins font-[400] text-[1rem] text-white capitalize min-h-max
                    opacity-70 text-center p-boxS
                    max-w-[50rem]
                    '
                >
                    Welcome to {companyData.company_name} official website. {companyData.company_description}
                </p>
                <div
                    className='flex flex-col md:flex-row gap-[1rem] mt-[1rem] w-full min-h-max px-boxS
                    max-w-[50rem]
                    '
                >
                    <Button
                        href='/portofolio'
                        className='bg-secondary font-bold gap-[0.5rem]'
                    >
                        Posts
                        <Porto />
                    </Button>

                    <a
                        href={`mailto:${companyData.company_email}`}
                        className={`px-[2rem] py-[0.5rem] rounded-[0.5rem] w-full font-poppins font-[500] text-[1rem] 
                                    hover:bg-opacity-40 transition duration-300 ease-in-out 
                                    flex justify-center items-center text-center
                                    bg-none text-white
                                  border-secondary border-[0.1rem] gap-[0.5rem] 
                                  hover:border-opacity-40 
                }`}
                    >
                        Contact Me!
                    </a>
                </div>

                <div
                    className='flex flex-col md:flex-row gap-[1rem] mt-[1rem] w-full min-h-max px-boxS max-w-[50rem]'
                >
                    <button
                        onClick={() => window.open(companyData.cv, '_blank')}
                        className='btn bg-secondary w-full text-center font-bold flex text-[1rem]
                        justify-center items-center gap-[0.5rem]
                        '
                    >
                        Download CV
                        <Download />
                    </button>
                </div>
            </div>
        </SectionContainer>
    )
}




const Button = ({ children, className = '', ...props }: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className={`
             px-[2rem] py-[0.5rem] rounded-[0.5rem] w-full font-poppins font-[500] text-[1rem]
                    hover:bg-opacity-40 transition duration-300 ease-in-out
                    flex justify-center items-center text-center
                    ${className}`}
        >
            {children}
        </Link>
    )
}


const ButtonLink = ({ children, className = '', ...props }: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className={`
             px-[2rem] py-[0.5rem] rounded-[0.5rem] w-full font-poppins font-[500] text-[1rem] 
             hover:bg-opacity-40 transition duration-300 ease-in-out 
             flex justify-center items-center text-center
            ${className}`}
        >
            {children}
        </Link>
    )
}