import { useState } from 'react'
import Navbar from '../components/Navbar'
import {ETHAddress} from '../components/utils'
import secondaryLogo from '../assets/secondary-logo.svg'



function Homepage() {
  const [count, setCount] = useState(0)

  return (

    <div className='bg-primary h-[978px]'>


<div className='tabtolargemob:hidden'>
  <Navbar/>
  </div>

{/* <div className='absolute w-[132px] h-[77px] left-[9%] top-[0%] bg-pink-500'></div> */}



<div className=' pt-[118px] largemobtomob:pt-[60px] pb-[139px] flex flex-col  items-center text-white space-y-[138px]'>


<div >

<h1 className=' tabtolargemob:flex tabtolargemob:flex-col tabtolargemob:space-y-8 uppercase desktotab:text-center font-bold mobile:text-[90px] text-[115px] mobile:leading-[65px]  leading-[96px]  '><span className='textGradientCSS' style={{fontFamily: 'Chakra Petch, sans-serif'}}>Watch</span> <span >Dogs</span> </h1>


<div className='  w-[835px] h-[117px] -my-[5%]  leading-10 text-[32px] largemobtomob:text-2xl mobile:text-lg mobile:leading-12'>
  <p className='text-center w-full'>We know what you do in the dark.. </p>
</div>


</div>


<div className=' w-[90%] max-w-[1150px]  relative z-30'>


<div className=' -z-10  w-[338px] h-[342px] mobile:w-[280px] mobile:h-[330px]  absolute -top-[108px]  left-[50%] -translate-x-[50%] '>


<img src={secondaryLogo} className='  w-full max-w-full object-cover h-full' alt="" />


</div>





<ETHAddress/>


</div>


</div>




    </div>


  )
}

export default Homepage
