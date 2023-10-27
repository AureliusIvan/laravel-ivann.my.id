import SectionContainer from '@/Components/General/SectionContainer'
import ProductCard from '@/Components/Product/ProductCard';
import { Link, usePage } from '@inertiajs/react';
import { Skeleton } from 'antd';
import React, { useEffect } from 'react'

export default function ProductSection() {
    let counter = 1;
    const PortofolioData: any = usePage().props.ProductData
    useEffect(() => {
        console.log("Porto:", PortofolioData.ProductData)
    }, [])
    return (
        <SectionContainer>
            <div
                className='bg-[#F9F5F2]
                bg-opacity-10
                flex p-[1rem] md:p-[2rem]
                flex-col'
            >
                <div
                    className='flex items-center justify-between w-full'
                >
                    <h1
                        className='text-[1.5rem] md:text-[2rem] font-[700] text-left w-full
                        text-white
                        '
                    >
                        Discover my PortoFolio & Project
                    </h1>
                    <Link className="btn bg-secondary hidden md:block"
                        href='/portofolio'
                    >
                        <span
                            className='flex items-center justify-center gap-2.5
                            font-[700] text-[1.5rem] text-primaryBlack whitespace-nowrap
                            '
                        >
                            View more
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"
                                    className='fill-primary'
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div
                    className='hidden md:flex  flex-wrap mt-[1rem] md:mt-[2rem] justify-between rounded-[0.75rem] overflow-hidden'
                >
                    {
                        PortofolioData?.map((item: any, index: any) => {
                            if (counter === 4) {
                                counter = 0;
                            }
                            counter = counter + 1;
                            if (counter >= 3) {
                                return (
                                    <ProductCard
                                        ProductData={item}
                                        key={index}
                                        width={"60%"}
                                        height='23.5rem'
                                    />
                                )
                            } else {
                                return (
                                    <ProductCard
                                        ProductData={item}
                                        key={index}
                                        width={"40%"}
                                        height='23.5rem'

                                    />
                                )
                            }
                        })
                    }
                </div>

                {/* For Mobile View */}
                <div
                    className='flex md:hidden flex-wrap mt-[1rem] md:mt-[2rem] justify-between rounded-[0.75rem] overflow-hidden'
                >
                    {
                        PortofolioData?.map((item: any, index: any) => {
                            return (
                                <ProductCard
                                    ProductData={item}
                                    key={index}
                                    height='13.5rem'
                                />
                            )
                        })
                    }
                </div>

                <Link className="btn bg-secondary block md:hidden mt-[1rem]"
                    href='/portofolio'
                >
                    <span
                        className='flex items-center justify-between gap-2.5
                            font-[700] text-[0.875rem] text-primaryBlack whitespace-nowrap'
                    >
                        View more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"
                                className='fill-primary'
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </SectionContainer>
    )
}

