import Header from '@/Components/General/Header'
import SectionContainer from '@/Components/General/SectionContainer'
import Guest from '@/Layouts/GuestLayout'
import React from 'react'
import DesignImg from './Assets/design.webp'
import BuildImg from './Assets/build.webp'
import VisualizeImg from './Assets/visual.webp'
import BannerImg from './Assets/services-banner.webp'
import CollaborateCard from '@/Components/General/CollaborateCard'
import { Head } from '@inertiajs/react'

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Services</title>
                <meta name="description" content="Services" />
                <meta name="keywords" content="Services" />
            </Head>
            <Guest>
                <SectionContainer>
                    <Header
                        title='Our services'
                        image={BannerImg}
                    />
                    <div>
                        {ServiceData.map((service, index) => (
                            <ServiceCard
                                {...service}
                            />
                        ))}
                    </div>
                    <CollaborateCard />
                </SectionContainer>
            </Guest>
        </>
    )
}

const ServiceData = [
    {
        backgroundColor: '#F9F5F2',
        title: 'Design',
        titleColor: 'black',
        description: "We provide architectural and interior design services. They include consultation, moodboard, furniture and material lists, schematic design, detailed design, and construction drawings. We also do supervision for built projects.",
        descriptionColor: '#8D7E61',
        image: DesignImg,
        reverse: false,
    },
    {
        backgroundColor: '#E8DCCA',
        title: 'Visualization',
        titleColor: 'black',
        description: "We provide visualization such as architecture/interior 3D modeling and rendering.",
        descriptionColor: 'text-secondary',
        image: VisualizeImg,
        reverse: true
    },
    {
        backgroundColor: '#8D7E61',
        title: 'Build',
        titleColor: 'white',
        description: "We provide interior construction services with us as the main contractor or through partnerships with others. This service is only intended for designs made by us.",
        descriptionColor: 'white',
        image: BuildImg,
        reverse: false
    },
]


const ServiceCard = ({ reverse, backgroundColor, title, titleColor, description, descriptionColor, image }: { reverse?: boolean, backgroundColor: string, title: string, titleColor: string, description: string, descriptionColor: string, image: string }) => {
    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[2rem] '
        >
            <img
                className={`w-full aspect-square object-cover rounded-[0.75rem] bg-primary ${reverse && 'md:order-last'}`}
                src={image} alt={title} />
            <div
                className='rounded-[0.75rem] p-[1rem] md:p-[4rem]'
                style={{ backgroundColor: backgroundColor }}
            >
                <h2
                    className='font-[700] text-[2rem] md:text-[2.5rem] mb-[0.75rem]'
                    style={{ color: titleColor }}
                >
                    {title}
                </h2>
                <p
                    className='font-[500] text-[1rem] md:text-[1.75rem] text-secondary'
                    style={{ color: descriptionColor }}
                >
                    {description}
                </p>
            </div>
        </div >
    )
}

