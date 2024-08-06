import ContactArrow from '@img/ContactArrow.png'

const Contact = () => {
    return (
        <div className='container mx-auto '>
            <div className='bg-[#F0FAFC] box flex flex-col lg:flex-row justify-center items-center rounded-xl p-6 md:p-8 lg:p-0'>
                <div className='w-full  lg:w-1/2 relative p-2 md:p-10 z-30  lg:pr-36 order-2 lg:order-1'>
                    <img src={ContactArrow} className='hidden lg:block absolute top-0 -right-20 h-32' alt="" />
                    <div className='bg-white rounded-2xl relative'>
                        <div className='absolute bg-[#FF6636] -z-10 h-1/2 w-32 -left-2 -top-2 rounded-2xl' />
                        <h3 className='text-[rgb(74,66,236)] text-3xl px-10 py-8 pb-4 font-semibold border-b border-[#4A42EC]'>Get in Touch</h3>
                        <div className='p-3 md:p-10 space-y-4'>
                            <div>
                                <p className='text-sm font-semibold mb-2'>Name</p>
                                <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='Full name' />
                            </div>
                            <div>
                                <p className='text-sm font-semibold mb-2'>Email</p>
                                <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='Email Address' />
                            </div>
                            <div>
                                <p className='text-sm font-semibold mb-2'>Phone No.</p>
                                <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='Phone Number' />
                            </div>
                            <div>
                                <p className='text-sm font-semibold mb-2'>Message</p>
                                <textarea placeholder='Your Message' rows={4} className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500'></textarea>
                            </div>
                            <div className="relative">
                                <button className="relative bg-[#4A42EC] w-full border-[#4A42EC] hover:bg-[#2F27CF] font-semibold text-white transition-colors duration-300 border-[1.4px] rounded-md px-4 py-2 z-20">
                                    Submit Message
                                </button>
                                <div className="absolute rounded-md w-full h-full bg-[#FF6636] top-1 left-1 z-10" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 pr-0 lg:pr-14 order-1 lg:order-2 mb-10 md:mb-0'>
                    <h3 className="text-[#4A42EC] text-center lg:text-left">CONTACT WITH US</h3>
                    <h2 className="text-2xl md:text-5xl font-semibold my-5 text-center lg:text-left">Get In Touch With Us And We’ll Assist You ASAP</h2>
                    <p className="text-gray-500  md:text-xl text-center lg:text-left">Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
                </div>
            </div>
        </div>

    )
}

export default Contact