import PriceBackground from '@img/PriceBackground.png'
import { TiTick } from "react-icons/ti";
import PriceCard from './PriceCard';

const Pricing = () => {
  return (
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center '>
       <PriceCard price={99} planName='Basic Plan'/>
       <PriceCard price={199} planName='Standard Plan'/>
       <PriceCard price={299} planName='Premium Plan' isLast={true}/>
      </div>
  )
}

export default Pricing