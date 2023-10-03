import Header from '@/Components/General/Header'
import SectionContainer from '@/Components/General/SectionContainer'
import Guest from '@/Layouts/GuestLayout'
import { usePage } from '@inertiajs/react';
import React from 'react'
import AboutBg from "./Assets/about-header.webp"

export default function AboutPage() {

    const companyData: any = usePage().props.companyData; //get page info
    return (
        <Guest>
            <SectionContainer>
                <Header
                    title='About Us'
                    image={AboutBg}
                />
                <div
                    className='grid grid-cols-1 md:grid-cols-3 gap-[2rem] h-fit py-[1rem] md:py-[2rem]'
                >
                    <FounderCard name={"Gavin Mika"} position={"Co-Founder"} color="#E8DCCA" />
                    <FounderCard name={"Joe Nadia"} position={"Co-Founder"} color="#8D7E61" />
                    <FounderCard name={"Yohanes Marvel"} position={"Co-Founder"} color="#383323" />
                </div>
                <div
                    className='bg-primaryWhite my-[2rem] p-[1rem] md:p-[2rem] rounded-[0.75rem]
                    whitespace-pre-wrap'
                >
                    {companyData.about_description}
                </div>
            </SectionContainer>
        </Guest>
    )
}




const FounderCard = (founder: any) => {
    return (
        <div
            className='flex flex-col
            bg-[#E8E8E8] rounded-lg p-[1rem] md:p-[2rem] min-h-[8rem] md:min-h-[15rem] justify-end relative overflow-hidden'
        >

            <h1
                className='text-2xl font-semibold z-[1]'
            >{founder.name}</h1>
            <p
                className='font-[1rem] z-[1]'
            >{founder.position}</p>
            <div
                className={`w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] rounded-full absolute isolate z-[0] right-[-10rem] md:right-[-14rem] bottom-[-120%] md:bottom-[-10rem]
                `}
                style={{ backgroundColor: founder.color }}
            />
        </div>
    )
}