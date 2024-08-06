import ValuesImage from '@img/ValuesImage.png'
import CurveLine from '@img/CurveLine.png'

const OurValues = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center relative  box">
            <img src={CurveLine} className='h-24 md:h-32  lg:h-52 absolute right-0 -top-4 -rotate-[160deg] md:rotate-0 md:right-auto md:-top-12 lg:-top-0 md:left-3/5 lf:left-2/5 transform md:-translate-x-1/2' alt="" />
            <div className="w-full md:w-1/2 space-y-5 p-4 md:p-10 flex flex-col justify-center md:justify-start items-center">
                <h3 className="text-[#4A42EC] text-center md:text-left">OUR VALUES</h3>
                <h2 className="text-xl lg:text-5xl font-semibold text-center md:text-left px-6 md:p-0">We Help Customers Providing Living Supports</h2>
                <p className="text-gray-500 text-sm text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                <button className="relative hover:bg-[#4A42EC] border-[#4A42EC] bg-white font-semibold text-[#4A42EC] hover:text-white transition-colors duration-300 border-[1.4px] rounded-md px-4 py-2">
                    Learn More
                    <div className="absolute rounded-md w-full h-full bg-[#FF6636] top-1 left-1 -z-10" />
                </button>
            </div>
            <div className="w-full md:w-1/2 relative p-0 md:p-5 flex justify-center items-center  ">
                <img src={ValuesImage} className='md:w-full lg:w-4/5   p-5 rounded-2xl' alt="" />
                <div className='absolute bottom-44 p-2 gap-3 rounded-lg bg-[#FCF4EE] text-black flex justify-center items-center right-0  '>
                    <p className='font-semibold text-xl lg:text-4xl'>40</p>
                    <p className='font-semibold text-sm lg:text-lg leading-none'> Location <br /> Served</p>
                </div>
                <div className='absolute top-64 lg:top-56 p-2 gap-3 rounded-lg bg-[#FFDEDE] text-[#4A42EC] flex justify-center items-center transform right-0'>
                    <p className='font-semibold text-xl lg:text-4xl'>100%</p>
                    <p className='font-semibold text-sm lg:text-lg leading-none'> Costumer <br /> Focused</p>
                </div>
                <div className='absolute bottom-56 p-2 gap-3 rounded-lg bg-[#DDFCFF] text-[#FF6636] flex justify-center items-center  transform -translate-x-1/2'>
                    <p className='font-semibold text-xl lg:text-4xl'>10</p>
                    <p className='font-semibold text-sm lg:text-lg leading-none'> Years of <br /> Experiences</p>
                </div>
                <div className='absolute bottom-5 p-2 gap-3 rounded-lg bg-[#EBF2FF] text-[#4A42EC] flex justify-center items-center left-[calc(50%-40px)] transform -translate-x-1/2'>
                    <p className='font-semibold text-xl lg:text-4xl'>10K</p>
                    <p className='font-semibold text-sm lg:text-lg leading-none'> Projects <br /> Integrated</p>
                </div>
            </div>
        </div>

    )
}

export default OurValues