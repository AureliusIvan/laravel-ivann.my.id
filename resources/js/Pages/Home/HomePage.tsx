// styling
import Guest from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import HeroSection from './Section/HeroSection';
import DescriptionSection from './Section/DescriptionSection';
import TestimonySection from './Section/TestimonySection';
import Slider from '@/Components/General/Slider';
import ProductSection from './Section/ProductSection';
import CollaborateCard from '@/Components/General/CollaborateCard';
import SectionContainer from '@/Components/General/SectionContainer';
import AboutIcon from "./Asset/about-icon.svg"
import ServiceIcon from "./Asset/services-icon.svg"
import AboutSection from './Section/AboutSection';
import CollaborateSection from './Section/CollaborateSection';

export default function HomePage() {
    const page: any = usePage().props;
    useEffect(() => {
        console.log(page);
    }, [])
    return (
        <>
            <Head>
                <title>
                    Home
                </title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <Guest>
                <HeroSection
                />
                {/* <DescriptionSection /> */}
                <ProductSection />
                <CollaborateSection />
            </Guest>
        </>
    )
}



const RecommendPage = ({ icon, color, title, children }: any) => {
    return (
        <div
            className='flex flex-col items-start w-full h-fit overflow-hidden p-[1rem] md:p-[2rem] rounded-[0.75rem]'
            style={{ backgroundColor: color }}
        >
            <img src={icon} alt={title}
                className='w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem] bg-secondary p-[0.75rem] md:p-[1.25rem] rounded-full mb-[1rem] md:mb-[2rem]'
            />
            <p
                className='font-[500] text-[1.5rem] sm:text-[2rem]  md:text-[2rem] lg:text-[2rem] mb-[3rem] break-keep'
            >
                {children}
            </p>
            <Link
                href={title === "About us" ? "/about" : "/services"}
                className="btn bg-secondary">
                <span
                    className='flex items-center justify-center gap-2.5
                         font-[600] text-[0.875rem] md:text-[1.5rem] text-white '
                >
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        className='w-[0.875rem] md:w-[1.5rem] h-[0.875rem] md:h-[1.5rem] '
                    >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"
                            className='fill-white'
                        />
                    </svg>
                </span>
            </Link>
        </div>)
}


