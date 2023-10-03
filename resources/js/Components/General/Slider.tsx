import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type SliderProps = {
    children: React.ReactNode
}

export default function Slider({ children }: React.PropsWithChildren<SliderProps>) {
    const swiperRef = useRef();
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            onSwiper={(swiper: any) => {
                if (swiper) {
                    swiperRef.current = swiper;
                }
            }}
            modules={[Pagination, Navigation, A11y]}
            navigation={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }}
            className='w-full h-full max-w-7xl overflow-visible gap-[2.66rem]'
        >
            {children}
        </Swiper>
    )
}
