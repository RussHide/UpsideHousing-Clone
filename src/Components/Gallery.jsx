import GalleryOne from '@img/GalleryOne.webp';
import GalleryTwo from '@img/GalleryTwo.webp';
import GalleryThree from '@img/GalleryThree.webp';
import GalleryFour from '@img/GalleryFour.webp';
import GalleryFive from '@img/GalleryFive.webp';
import GallerySix from '@img/GallerySix.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GalleryDec from '@img/GalleryDec.png'
import { RiShareBoxLine } from "react-icons/ri";

const Gallery = () => {
    return (
        <div className='container mx-auto'>
            <div className="bg-[#F0FAFC] box flex lg:flex-row flex-col justify-center items-center px-10 lg:pt-20 lg:pl-20 pb-14 md:pb-7 lg:px-5 relative rounded-2xl ">
                <img src={GalleryDec} className='absolute top-0 w-44 left-[20%] rotate-180' alt="" />
                <div className='absolute right-auto top-auto bottom-4 md:bottom-auto md:top-5 md:right-10 flex justify-center items-center gap-x-5'>
                    <div className="swBtnBack rounded p-2 text-white bg-[#4A42EC] hover:bg-[#2F27CF]"><IoIosArrowBack size={25} /> </div>
                    <div className=" swBtnNext rounded p-2 text-white bg-[#4A42EC] hover:bg-[#2F27CF]"><IoIosArrowForward size={25} /></div>
                </div>
                <div className="w-full lg:w-1/3 space-y-5 relative">
                    <p className='text-[#4A42EC] font-semibold text-center md:text-left text-xl mt-5 lg:mt-0'>POPULAR AREAS</p>
                    <p className="text-xl text-center md:text-left md:text-4xl font-semibold ">EXPLORE MOST <br className='hidden md:block' /> POPULAR AREAS</p>
                    <div className="lg:relative md:absolute md:right-0 lg:right-auto md:top-16 w-full lg:top-auto md:w-fit flex justify-center md:justify-start items-center">
                        <div className='relative'>
                            <button className="relative bg-[#4A42EC]  border-[#4A42EC] hover:bg-[#2F27CF] font-semibold text-white transition-colors duration-300 border-[1.4px] rounded-md px-4 py-2 z-20">Explore More</button>
                            <div className="absolute rounded-md  w-full h-full bg-[#FF6636] top-1 left-1 z-10" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 py-5 md:px-0 lg:px-5 rounded-md">
                    <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={15} navigation={{ nextEl: '.swBtnBack', prevEl: '.swBtnNext' }} autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {[GalleryOne, GalleryTwo, GalleryThree, GalleryFour, GalleryFive, GallerySix].map((item, index) => (
                            <SwiperSlide key={index} className='relative'>
                                <img src={item} className='h-[400px] w-full rounded-lg' />
                                <div className='absolute px-2 py-1 bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white rounded-lg  group w-[90%] z-[999]'>
                                    <div className='flex flex-col items-center'>
                                        <div className='flex justify-between items-end text-3xl group-hover:text-[#FF6636]'>
                                            <p className='font-bold pulse'>240</p>
                                            <RiShareBoxLine className='mb-1 opacity-0 transition-opacity text-[#FF6636] duration-300 hover:cursor-pointer group-hover:opacity-100' size={20} />
                                        </div>
                                        <p className='text-[#4A42EC] font-semibold'>Place Available</p>
                                        <p className='text-center'>London, United Kingdom</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
