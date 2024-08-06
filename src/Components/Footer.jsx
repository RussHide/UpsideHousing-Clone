import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterProp from '@img/FooterProp.png'

const Footer = () => {
    return (
        <div className='bg-[#0D001D]'>
            <div className="p-5 md:p-14  mx-3 md:mx-10 gap-14 grid grid-cols-1  md:grid-cols-3 place-items-start text-white">
                <div>
                    <p className="text-xl font-semibold">ABOUT US</p>
                    <div className="bg-[#FF6636] h-[3px] w-5 my-3" />
                    <p className="mb-8 mt-6 md:text-lg">UPSIde is committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of luxury real estate, and rental properties.</p>
                    <div className="flex justify-start items-center gap-x-4">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Item, index) => (
                            <div key={index} className="rounded-full bg-[#4A4056] p-2 hover:bg-[#FF6636] pulse hover:cursor-pointer">
                                <Item size={23} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-xl font-semibold">CONTACT</p>
                    <div className="bg-[#FF6636] h-[3px] w-5 my-3" />
                    <ul className="space-y-4 mt-6">
                        <li>10845 Griffith Peak Dr, Las Vegas, NV 89135</li>
                        <li>+1800-555-0000</li>
                        <li>+1800-555-0000</li>
                        <li>office@realestate.com</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl">POPULAR PROPERTIES</p>
                    <div className="bg-[#FF6636] h-[3px] w-5 my-3" />
                    <div className="flex justify-start items-start gap-3 my-6">
                        <img className="rounded-lg" src={FooterProp} alt="" />
                        <div className="text-lg">
                            <p className="text-gray-400">Amazing Furnished Apartment</p>
                            <p className="font-semibold">$15000.00</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-3">
                        <img className="rounded-lg" src={FooterProp} alt="" />
                        <div className="text-lg">
                            <p className="text-gray-400">Amazing Furnished Apartment</p>
                            <p className="font-semibold">$15000.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 text-center border-t border-gray-100 text-white text-sm md:text-base ">
                <p>Copyright UPSide Real-Estate. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer