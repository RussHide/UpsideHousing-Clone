import Logo from '@img/Logo.png'
import { ImPhone } from "react-icons/im";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center absolute w-full px-10 py-2 rounded-2xl  bg-gradient-to-b from-blue-200 via-white to-blue-200 top-7'>
      <img src={Logo} className='w-32' alt="" />
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center font-semibold text-black gap-10 mr-10'>
          <li>Home</li>
          <li>Properties</li>
          <li>Pages</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='bg-[#4A42EC] text-white font-semibold flex items-center rounded-full px-3 gap-x-2 py-1'>
          <div className='bg-white text-[#FF6636] rounded-full p-1'>
            <ImPhone />
          </div>
          <p>126660</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar