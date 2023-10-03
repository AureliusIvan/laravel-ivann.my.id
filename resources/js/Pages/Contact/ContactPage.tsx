import Guest from '@/Layouts/GuestLayout'
import React, { useEffect } from 'react'
import EmailFormSection from './Section/EmailFormSection'
import { Head, usePage } from '@inertiajs/react'
import SectionContainer from '@/Components/General/SectionContainer'
import Header from '@/Components/General/Header'

export default function ContactPage() {
    const companyData: any = usePage().props.companyData
    // useEffect(() => {
    //     console.log(pageData)
    // }, [])
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Guest>
                <SectionContainer>
                    <div
                    >
                        <Header
                            title='Contact Us'
                        />
                        <div
                            className='flex flex-col justify-center items-center p-5'
                        >
                            <EmailFormSection />
                        </div>
                        <div
                            className='flex flex-col justify-center items-center p-5'
                        >
                            <h2
                                className='text-2xl font-semibold mb-3'
                            >
                                Atau hubungi kami di
                            </h2>
                            <div>
                                <div
                                    className='flex flex-row justify-center items-center space-x-5'
                                >
                                    <a href={companyData.company_instagram} target='_blank'>
                                        <img src={"https://www.svgrepo.com/show/452229/instagram-1.svg"} alt=""
                                            className='w-10 h-10'
                                        />
                                    </a>
                                    <a href={companyData.company_linkedin} target='_blank'>
                                        <img src={"https://www.svgrepo.com/show/452047/linkedin-1.svg"} alt=""
                                            className='w-10 h-10'
                                        />
                                    </a>
                                    <a href={companyData.company_facebook} target='_blank'>
                                        <img src={"https://www.svgrepo.com/show/475647/facebook-color.svg"} alt=""
                                            className='w-10 h-10'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </Guest>
        </>
    )
}