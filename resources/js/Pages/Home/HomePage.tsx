// styling
import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import HeroSection from "./Section/HeroSection";
import DescriptionSection from "./Section/DescriptionSection";
import TestimonySection from "./Section/TestimonySection";
import Slider from "@/Components/General/Slider";
import ProductSection from "./Section/ProductSection";
import CollaborateCard from "@/Components/General/CollaborateCard";
import SectionContainer from "@/Components/General/SectionContainer";
import AboutIcon from "./Asset/about-icon.svg";
import ServiceIcon from "./Asset/services-icon.svg";
import AboutSection from "./Section/AboutSection";
import CollaborateSection from "./Section/CollaborateSection";
import WebscreenImage from "@/Assets/Images/webscreen.webp";
import "./HomePage.scss";

export default function HomePage() {
    const page: any = usePage().props;

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content={`Welcome to ${page?.companyData?.company_name} official website. ${page?.companyData?.company_description} 🏠`}
                />

                <meta
                    name="keywords"
                    content={
                        "blog, react.js, laravel, web, Aurelius Ivan Wijaya, Ivan, Universitas Multimedia Nusantara"
                    }
                />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={page?.companyData?.company_name}
                />
                <meta
                    property="og:description"
                    content={`Welcome to ${page?.companyData?.company_name} official website. ${page?.companyData?.company_description} 🏠`}
                />
                <meta property="og:image" content={WebscreenImage} />
                <meta property="og:url" content="https://ivann.my.id/" />
            </Head>
            <Guest>
                {/* this is the content */}
                <HeroSection />
                <ProductSection />
                <CollaborateSection />
            </Guest>
        </>
    );
}
