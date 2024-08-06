import WhoOne from '@img/WhoOne.png'
import WhoTwo from '@img/WhoTwo.png'
import WhoThree from '@img/WhoThree.png'


const WhoWeAre = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center box mb-10">
            <div className="w-full md:w-1/2 relative order-2 md:order-1 rounded-2xl md:p-10 mx-10">
                <img src={WhoOne} className='w-full relative top-auto md:-top-10 md:w-auto left-auto md:-left-10 lg:-top-10 lg:right-0 z-30' alt="" />
                <img src={WhoTwo} className=' hidden md:block absolute top-0 lg:w-auto w-[110px] right-4 lg:top-5 lg:right-32 z-20' alt="" />
                <img src={WhoThree} className=' hidden md:block absolute w-[200px] lg:w-auto bottom-0 right-0 lg:bottom-4 lg:right-10 z-30' alt="" />
            </div>
            <div className="flex flex-col justify-center md:justify-start items-center w-full md:w-1/2 space-y-5 py-10 order-1 md:order-2">
                <h3 className="text-[#4A42EC] text-center md:text-left">WHO WE ARE</h3>
                <h2 className="text-xl lg:text-5xl font-semibold text-center md:text-left">We Help People To Finding Residence Since 2010</h2>
                <p className="text-sm text-gray-500 text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <button className="relative hover:bg-[#4A42EC] border-[#4A42EC] bg-white font-semibold text-[#4A42EC] hover:text-white transition-colors duration-300 border-[1.4px] rounded-md px-4 py-2">Learn More<div className="absolute rounded-md w-full h-full bg-[#FF6636] top-1 left-1 -z-10" />
                </button>
            </div>
        </div>
    )
}

export default WhoWeAre