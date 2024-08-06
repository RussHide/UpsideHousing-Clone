import AmenityOne from '@img/AmenityOne.png';
import AmenityDec from '@img/AmenityDec.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Amenities = () => {
    return (
        <div className=' container mx-auto'>
            <div className="bg-[#F0FAFC] box flex flex-col lg:flex-row justify-center items-center relative rounded-2xl p-5">
               {/*  <img src={AmenityDec} className='absolute md:top-0 rotate-180 lg:bottom-0 w-64 right-20' alt="" /> */}
                <div className="w-full pt-10 md:pt-0 pb-24 md:pb-16  lg:w-1/2 order-2 lg:order-1 rounded-md relative md:mt-8 lg:mt-0">
                    <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={15} slidesPerView={1} navigation={{ nextEl: '.swBtnBack', prevEl: '.swBtnNext' }} autoplay={{ delay: 3000 }}>
                        {[AmenityOne, AmenityOne, AmenityOne].map((item, index) => (
                            <SwiperSlide key={index} className='relative'>
                                <img src={item} className='h-1/4 md:h-[450px] w-full rounded-lg' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute px-2 py-4 md:py-6 bottom-16 md:bottom-4 lg:bottom-2 left-4 right-4 flex justify-center items-center bg-[#FF6636] rounded-lg  group wfu md:w-[65%] z-[999]'>
                        <div className='flex justify-between items-center w-full px-5'>
                            <p className='text-white font-semibold  md:text-xl'>New Living Places </p>
                            <p className='font-semibold text-[#FFB39B] text-lg md:text-4xl'>1/3</p>
                        </div>
                    </div>
                    <div className='absolute bottom-0 lg:bottom-4 right-[28%] md:right-0 flex justify-center items-center gap-x-5 z-[998]'>
                        <div className="swBtnBack rounded p-2 text-white bg-[#4A42EC] hover:bg-[#2F27CF]"><IoIosArrowBack size={25} /> </div>
                        <div className="swBtnNext rounded p-2 text-white bg-[#4A42EC] hover:bg-[#2F27CF]"><IoIosArrowForward size={25} /></div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8 px-1 md:px-5 flex flex-col justify-center md:justify-start items-center ">
                    <p className='text-[#4A42EC] font-semibold text-xl text-center md:text-left'>POPULAR AREAS</p>
                    <p className="text-2xl md:text-4xl font-semibold text-center md:text-left">We Ensure Any Property For Our Customer Needs</p>
                    <p className='text-gray-500 md:text-xl text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                    {/* <div className="relative w-fit ">
                        <button className="relative bg-[#4A42EC]  border-[#4A42EC] hover:bg-[#2F27CF] font-semibold text-white transition-colors duration-300 border-[1.4px] rounded-md px-4 py-2 z-20">Contact Us</button>
                        <div className="absolute rounded-md  w-full h-full bg-[#FF6636] top-1 left-1 z-10" />
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Amenities