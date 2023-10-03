import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react'

export default function DescriptionSection({ companyDescription }: { companyDescription: string }) {

    const page: any = usePage().props;
    useEffect(() => {
        console.log(page);
    }, []);

    return (
        <div className="AboutSection  py-16">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
                    About Us
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8
                whitespace-pre-wrap
                ">
                    {companyDescription}
                </p>
                <div className="flex justify-center">
                    <button className="btn">
                        Learn More
                    </button>
                </div>
            </div>
        </div>

    )
}
