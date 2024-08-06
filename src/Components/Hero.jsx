import HeroBuild from '@img/HeroBuild.png';
import HeroCircle from '@img/HeroCircle.png';
import { Navbar } from '../Components';

const Hero = () => {
  return (
    <div className='bg-[#F0FAFC] h-[110vh] md:h-screen relative'>
      <div className='flex justify-center items-center relative '>
        <Navbar />
      </div>
      <div className='flex flex-col container lg:flex-row justify-between  items-center h-[calc(100%)] pl-0 lg:pl-10 box relative' >
        <div className=' relative lg:static left-0 transform translate-y-1/2 lg:-translate-y-0 w-full flex flex-col lg:justify-start justify-center lg:items-start items-center  lg:text-left text-center lg:w-1/2'>
          <h3 className='text-[20px] md:text-[40px] font-semibold'>Discover Your Dream With <br className='hidden md:block' /> <span className='underline text-[25px] md:text-[50px] text-[#4A42EC]'>New Living</span> Place</h3>
          <p className='text-gray-500 my-5 md:my-10 text-sm md:text-xl max-w-lg'>Through our proprietary platform, Upside Housing is helping you to find the best and most modern living places.</p>
          <button className='text-white bg-[#4A42EC] font-semibold mt-4 px-10 py-3 rounded-xl'>Solicita tu hipoteca</button>
        </div>
        <div className='w-full lg:w-1/2 relative flex justify-center items-center place-self-end '>
          <img className='relative z-50   md:h-auto md:w-auto' src={HeroBuild} alt="Foreground Image" />
          <img className='absolute -top-10 left-10 w-[80%] h-[80%] md:w-full md:h-full z-20' src={HeroCircle} alt="Background Image" />
        </div>
      </div>
      {/* <div className="flex justify-between relative h-screen">
        <div className="bg-red-500 p-4">Hijo 1</div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 p-4">Hijo 2</div>
      </div> */}
    </div>
  )
}

export default Hero;
