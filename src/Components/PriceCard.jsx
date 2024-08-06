import PriceBackground from '@img/PriceBackground.png'
import { TiTick } from "react-icons/ti";

const PriceCard = ({ price, planName, isLast }) => {
    return (
        <div className={`${isLast ? 'relative  md:max-w-[401.344px] lg:max-w-full md:col-span-2 lg:col-span-1' : ' w-full h-fit relative'}`}   >
            <img src={PriceBackground} className='w-[501.331px]' alt="" />
            <div className='text-white bg-[#4A42EC] top-1.5 left-1/2 transform -translate-x-1/2 rounded-full h-[10rem] w-[12rem] absolute flex flex-col justify-center items-center'>
                <p className='font-bold text-5xl mb-1'>${price}</p>
                <p className='text-sm'>Per month</p>
            </div>
            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 px-10'>
                <div className='text-center border-b border-gray-300 pb-6'>
                    <p className='text-3xl font-bold mb-2'>{planName}</p>
                    <p className='font-semibold'>Get Popular Plan From Us</p>
                </div>
                <ul className='w-full px-5 md:px-20 text-gray-400 font-semibold space-y-3  pt-6'>
                    <li className='flex justify-start w-full items-center gap-x-2'><TiTick /> Ad Management</li>
                    <li className='flex justify-start w-full items-center gap-x-2'><TiTick /> Multi-Language Content</li>
                    <li className='flex justify-start w-full items-center gap-x-2'><TiTick /> Conversational Bots</li>
                    <li className='flex justify-start w-full items-center gap-x-2'><TiTick /> SEO Marketing</li>
                    <li className='flex justify-start w-full items-center gap-x-2'><TiTick /> UX/UI Design</li>
                </ul>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#4A42EC] py-4 rounded-3xl text-sm font-semibold text-white w-2/3 mt-6'>Choose plan</button>
                </div>
            </div>
        </div>

    )
}

export default PriceCard