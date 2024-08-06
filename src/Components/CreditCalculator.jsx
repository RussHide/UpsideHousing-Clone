import CreditImage from '@img/CreditImage.webp';

const CreditCalculator = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0f6fe] to-transparent h-full ">
      <div className="flex items-center h-full">
        <div className="w-3/5  pr-10 p-14">
          <h1 className="text-xl font-semibold">Simulador de crédito hipotecario</h1>
          <h2 className="text-[60px] leading-none font-semibold mt-4">El primer paso hacia tu nuevo hogar</h2>
          <p className="text-gray-500 my-8 text-lg">En 2 minutos sabrás cuánto dinero te prestarían todos los bancos.</p>
          <div className='flex justify-center items-center gap-x-4 bg-white p-5 rounded-lg shadow-xl mr-10'>
            <div className='flex flex-col justify-start items-start text-sm'>
              <p className='text-sm font-semibold mb-2'>Precio de la propiedad*</p>
              <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='$0' />
            </div>
            <div className='flex flex-col justify-start items-start text-sm'>
              <p className='text-sm font-semibold mb-2'>Enganche*</p>
              <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='$0' />
            </div>
            <div className='flex flex-col justify-start items-start text-sm'>
              <p className='text-sm font-semibold mb-2'>¿A cuantos años?</p>
              <input type="text" className='border border-gray-200 rounded-md px-6 w-full py-3 placeholder-gray-500' placeholder='$0' />
            </div>
          </div>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md">Solicita tu hipoteca</button>
        </div>
        <div className="w-2/5 h-full object-cover relative overflow-hidden">
          <img src={CreditImage} className="w-full h-full object-cover aa" alt="Couple with Laptop" />
        </div>
      </div>
    </section>
  );
};

export default CreditCalculator;


{/* <div className="">
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a56_logo%20bbva.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a50_logo%20banorte.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a52_logo%20santander.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a66_logo%20hsbc.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a54_logo%20citibanamex.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a55_logo%20scotiabank.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a53_logo%20afirme.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a51_logo%20banregio.svg" loading="lazy" alt="" />
  <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef98ff/6643a82fc46ca462b5ef9a65_logo%20yave.svg" loading="lazy" alt="" />
</div> */}