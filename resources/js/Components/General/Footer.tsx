import { usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'
import ApplicationLogo from '../ApplicationLogo';
import SectionContainer from './SectionContainer';

export default function Footer() {
    const pageInfo = usePage();
    const [companyData, setCompanyData] = React.useState<any>(pageInfo?.props?.companyData);
    return (
        <footer className="w-full bg-primary
            justify-start items-center gap-[2rem] md:gap-[2rem] flex flex-col
            p-boxS
            ">
            <div
                className='mt-[2rem]'
            >
                <svg
                    className='stroke-secondary'
                    xmlns="http://www.w3.org/2000/svg" width="70" height="4" viewBox="0 0 70 4" fill="none">
                    <path d="M2.5 2H67.5" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>


            <div className="flex-col justify-start items-center gap-5 flex">
                <ApplicationLogo />
                <div className="text-black text-[1.25rem] font-[500] text-white">Our social media</div>
                <div className="md:justify-start md:items-start md:gap-4 xl:inline-flex
                grid grid-cols-1 w-full max-w-[20rem]
                justify-center items-center gap-5 
                ">
                    <SocialCard
                        icon='https://www.svgrepo.com/show/521736/mail.svg'
                        link={`mailto:${companyData.company_email}`}
                        title='Email'
                    />
                    <SocialCard
                        icon='https://www.svgrepo.com/show/521711/instagram.svg'
                        link={`https://instagram.com/${companyData.company_instagram}`}
                        title='Instagram'
                    />
                    <SocialCard
                        icon='https://www.svgrepo.com/show/510342/whatsapp.svg'
                        link={`https://wa.me/${companyData.company_whatsapp}`}
                        title='Whatsapp'
                    />
                </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-5 px-boxS">
                <div className="w-full text-center"><span
                    className='text-white text-[0.95rem] md:text-[1.25rem] font-[700] '
                >© 2023 Aurelius Ivan Wijaya.</span><span
                    className='text-white text-[0.95rem] md:text-[1.25rem] font-[400]'
                > All rights reserved</span></div>
                <div className="text-[#B7B7B7] text-base font-normal text-center text-[0.725rem] md:text-[1.15rem] px-boxS">
                    This website is managed by myself 🫡
                </div>
            </div>
        </footer>
    )
}



const SocialCard = ({ icon, link, title }: { icon: string, link: string, title?: string }) => {
    return (
        <a
            href={link}
            target='_blank'
            className="w-fit h-fit relative
            flex justify-center items-center gap-[1rem]
            ">
            <div className="
            w-11 h-11 md:w-13 md:h-13 left-0 top-0 
            rounded-full bg-secondary cursor-pointer pointer-events-auto hover:bg-opacity-50 transition-all duration-300 ease-in-out p-[0.5rem]"
            >
                <img
                    className='
                    w-full h-full object-contain'
                    src={icon} alt="" />
            </div>
            <p
                className='
                md:hidden
                block  text-white text-[1rem] md:text-[0.875rem] font-[500] text-center mt-[0.5rem]'
            >
                {title}
            </p>
        </a>
    )
}