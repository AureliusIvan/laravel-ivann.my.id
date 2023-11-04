import Header from '@/Components/General/Header';
import SectionContainer from '@/Components/General/SectionContainer';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react';
import React from 'react'
// Icon 
import {
    BsFillFileImageFill as Porto,
    BsFillEnvelopeHeartFill as Mail,
    BsDownload as Download
} from "react-icons/bs"

import "../HomePage.scss";

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
                 capitalize
                bg-gradient-to-r from-secondary via-secondary to-primaryPink text-transparent bg-clip-text animate-gradient bg-300% 
                '
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
                    max-w-[50rem]'
                >
                    <Button
                        href='/portofolio'
                    >
                        Posts
                        <Porto />
                    </Button>

                    <a
                        href={`mailto:${companyData.company_email}`}
                        className={`${ButtonStyle}`}
                    >
                        Contact Me!
                    </a>
                </div>

                <div
                    className='flex flex-col md:flex-row gap-[1rem] mt-[1rem] w-full min-h-max px-boxS max-w-[50rem]'
                >
                    <button
                        onClick={() => window.open(companyData.cv, '_blank')}
                        className={`${ButtonStyle}`}
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
            className={`${ButtonStyle}`}
        >
            {children}
        </Link>
    )
}




const ButtonStyle = `
px-[2rem] py-[0.5rem] rounded-[0.5rem] w-full font-poppins font-[500] text-[1rem]
hover:bg-opacity-40 transition duration-300 ease-in-out
flex justify-center items-center text-center
shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]
text-white
border-secondary border-[0.1rem] gap-[0.5rem]
hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
`