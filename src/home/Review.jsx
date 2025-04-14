import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//React icons
import { FaStar } from 'react-icons/fa6'
import ProPic from '../assets/profile.jpg'
// import './BannerCard.css'

// import required modules
import { Pagination } from 'swiper/modules';
export default function App() {
    return (
        <>
            <div className='my-12 px-4 lg:px-24 ml-5'>
                <h2 className='text-5xl font-bold text-center mb-10 leading-smug'>Our Reviews!</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper cursor-pointer ml-5"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure temporibus eveniet ad repellendus alias vero voluptatum. Aperiam cum quae id, modi, dicta commodi provident, adipisci facilis vero facere asperiores!</p>
                                    <img className='w-10 h-10 rounded-full mb-4 ' src={ProPic} alt="" />
                                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                                    <p className='text-base'>CEO ABC company</p>
                                </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure temporibus eveniet ad repellendus alias vero voluptatum. Aperiam cum quae id, modi, dicta commodi provident, adipisci facilis vero facere asperiores!</p>
                                    <img className='w-10 h-10 rounded-full mb-4 ' src={ProPic} alt="" />
                                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                                    <p className='text-base'>CEO ABC company</p>
                                </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure temporibus eveniet ad repellendus alias vero voluptatum. Aperiam cum quae id, modi, dicta commodi provident, adipisci facilis vero facere asperiores!</p>
                                    <img className='w-10 h-10 rounded-full mb-4 ' src={ProPic} alt="" />
                                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                                    <p className='text-base'>CEO ABC company</p>
                                </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
}
