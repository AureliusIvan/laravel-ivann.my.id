import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/General/Footer';
import Navbar from '@/Components/General/Navbar/Navbar';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { PropsWithChildren, ReactNode } from 'react';
import "@/Styles/global.scss"
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';
import SectionContainer from '@/Components/General/SectionContainer';

export default function Guest({ header, footer = true, children }: PropsWithChildren<{ header?: ReactNode, footer?: boolean }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = React.useState(false);
    const companyData: any = usePage().props.companyData; //get page info
    return (
        <>
            <Head>
                <title>{companyData?.company_name}</title>
                <meta name="description" content="" />
                <link rel="icon" href={companyData?.company_logo} />
            </Head>
            <SectionContainer
                className="
                    flex justify-between  h-[4.5rem] sm:h-[6.25rem]
                    fixed top-0 left-0 right-0 z-50
                    bg-primary
                    border-b-[0.01rem] border-solid border-transparentWhite"
            >
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/"
                    >
                        <ApplicationLogo className="block h-[3.1rem] md:h-[4.1rem]" />
                    </Link>
                </div>

                {/* Navbar Menu Desktop */}
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 md:flex justify-center items-center">
                    {
                        Route.map((item, index) => (
                            <NavLink
                                key={index} href={route(item.route)} active={route().current(item.route)}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                    <a
                        href={`mailto:${companyData?.company_email}`}
                        target='_blank'
                        className='
                        border-[0.1rem] border-secondary
                        bg-none text-[#F9F5F2] font-[600] px-[2rem] py-[0.5rem] rounded-[0.75rem]
                                hover:bg-secondary transition duration-300 ease-in-out text-[1.25rem]'
                    >
                        Contact
                    </a>
                </div>

                {/*  Navbar Menu Mobile */}
                <div className="
                md:hidden flex justify-center
                items-center z-[60] 
                ">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                    >
                        <svg className="h-6 w-6 stroke-secondary" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'block' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M4 6h34M4 12h34M4 18h34  "
                            />
                            <path
                                className={showingNavigationDropdown ? 'block' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className={(showingNavigationDropdown ? 'translate-y-0 opacity-[100%]' : 'translate-y-[-200%] opacity-[0%]') + 'md:hidden fixed top-[4.3rem] sm:top-[6.25rem] left-0 right-0 pb-[1rem] px-[1rem] bg-primary w-full z-50 flex flex-col items-center text-center isolate gap-[0.5rem] transform-gpu transition-all duration-500 ease-in-out origin-top'}>
                    {
                        Route.map((item, index) => (
                            <NavLink
                                key={index} href={route(item.route)} active={route().current(item.route)}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                    <a
                        href={`mailto:${companyData?.company_email}`}
                        target='_blank'
                        className='
                        border-[0.1rem] border-secondary w-full
                        bg-none text-[#F9F5F2] font-[600] px-[2rem] py-[0.5rem] rounded-[0.75rem]
                                hover:bg-secondary transition duration-300 ease-in-out text-[1.25rem]'
                    >
                        Contact
                    </a>
                </div>
            </SectionContainer>
            {/* safe zone */}
            <div
                className='opacity-0 h-[4.5rem] sm:h-[6.25rem] w-full'
            />
            <main
                className='bg-primary'
            >
                {children}
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    className='fixed bottom-[2rem] right-[2rem] bg-primaryBlack text-[#F9F5F2] font-[600] px-[0.75rem] py-[0.5rem] rounded-[0.5rem] hover:opacity-70 transition duration-300 ease-in-out text-[1.25rem] bg-opacity-20'
                >
                    <svg
                        className='w-[ rem] h-[2rem]'
                        fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
                </button>
            </main>
            {/* Footer */}
            {footer ?
                <Footer /> : null}
        </>
    );
}


const Route = [
    {
        name: 'Home',
        path: '/',
        route: 'home'
    },
    // {
    //     name: 'About',
    //     path: '/about',
    //     route: 'about'
    // },
    // {
    //     name: 'Services',
    //     path: '/services',
    //     route: 'services'
    // },
    {
        name: 'Portofolio',
        path: '/product',
        route: 'product'
    },
    // {
    //     name: 'Gallery',
    //     path: '/gallery',
    //     route: 'gallery'
    // }
    // {
    //     name: 'Pricing',
    //     path: '/pricing',
    //     route: 'pricing'
    // },
]