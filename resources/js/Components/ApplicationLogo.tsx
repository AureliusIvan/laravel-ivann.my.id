import { usePage } from '@inertiajs/react';
import { SVGAttributes, useEffect } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    const page: any = usePage().props;
    // useEffect(() => {
    //     console.log(page);
    // }, []);
    return (
        <>
                {/* <img
                    className={`
                    aspect-square
                    p-2
                    ${props.className}
                `}
                    src={page?.companyData.company_logo}
                /> */}
            <p
                className='text-2xl font-bold font-poppins
                bg-gradient-to-r from-secondary via-secondary to-primaryPink text-transparent bg-clip-text animate-gradient bg-300% 
                '
            >
                Ivan
            </p>
        </>
    );
}
