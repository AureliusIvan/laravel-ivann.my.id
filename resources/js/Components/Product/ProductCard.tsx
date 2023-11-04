import { PageProps } from '@/types'
import { Link } from '@inertiajs/react'
import React, { useEffect } from 'react'
import "./ProductCard.scss"
import TagComponent from './TagComponent'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ProductCard({ ProductData, width, height }: { ProductData: any, width?: string, height?: string, rounded?: boolean }) {

    useEffect(() => {
        console.log(ProductData);
        console.log('img : ', ProductData.image);
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',

        });
    }, [])
    return (
        <>
            <Link
                href={`/post/${ProductData.slug}`}
                className='ProductCard'
                style={{

                    isolation: 'isolate',
                    width: width,
                    height: height,
                }}
                data-aos="fade-up"
            >
                <div
                    className='ProductCard__imageContainer'
                >
                    {ProductData.image && (
                        <img
                            src={ProductData.image}
                            alt={ProductData.title}
                            className='ProductCard__image'
                        />
                    )}
                </div>
                <div
                    className='ProductCard__InfoContainer'
                >
                    <h1
                        className='ProductCard__title'
                    >
                        {ProductData.title}
                    </h1>
                    <h2
                        className='ProductCard__createdAt'
                    >
                        {ProductData.created_at}
                    </h2>
                    <p
                        className='ProductCard__description'
                    >
                        {ProductData.description}
                    </p>
                    <div
                        className='ProductCard__tagContainer'
                    >
                        <TagComponent
                            tag='code'
                        />
                        <TagComponent
                            tag='life'
                        />
                    </div>
                </div>
            </Link>
        </>
    )
}



{/* <svg
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none"
className='ProductCard__icon'
>
<path fillRule="evenodd" clipRule="evenodd" d="M5.83801 2.01473C5.83801 1.27835 6.43496 0.681396 7.17134 0.681396H18.485C19.2214 0.681396 19.8184 1.27835 19.8184 2.01473V13.3284C19.8184 14.0648 19.2214 14.6618 18.485 14.6618C17.7487 14.6618 17.1517 14.0648 17.1517 13.3284V5.23368L2.45729 19.9281C1.9366 20.4488 1.09238 20.4488 0.571677 19.9281C0.0509776 19.4074 0.0509776 18.5632 0.571677 18.0425L15.2661 3.34806H7.17134C6.43496 3.34806 5.83801 2.75111 5.83801 2.01473Z" fill="white" />
</svg> */}