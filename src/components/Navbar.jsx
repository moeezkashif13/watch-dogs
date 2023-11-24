import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { about, contentpolicy, termsofservices } from './linksforfutureuse'

const Box = ()=>{
    return <div className='w-[226px]  rounded-[10px] bg-[#E5E4E4] pb-1.5 space-y-3'>


<div className='pl-[14px] '>
<p className='font-medium  leading-5 w-[162px] h-[71px] flex items-center '>You’re currently Anonymous..</p>

<div className='flex items-center'>

<div className='flex gap-x-1'>

<div className='w-4 h-4 '>

<img src={logo} className='imageCommon' alt="" />

</div>

<p className='leading-4 font-medium'>10</p>


</div>

<div className='ml-auto mr-[18px]  font-bold  text-[10px] leading-3 flex items-center justify-center h-[24px] w-[85px] bg-[#CCCCCC] rounded-[5px]' style={{boxShadow: '0px 2px 4px 0px #68686833'}}>Buy credits</div>

</div>


</div>


<div className=' font-medium text-sm leading-[14px]'>


    <Link to='/signup' className='h-[27px] flex items-center    px-[14px]'>My portfolio</Link>

    <Link to='/introduction' className='h-[27px] flex items-center    px-[14px]'>What is Watch Dogs?</Link>


    <Link to='/signup' className='h-[27px] flex items-center    px-[14px]'>Sign Up &nbsp; <span className='text-[#383838] text-[10px] leading-3'>(Get <span>10</span> extra search credits)</span></Link>


    <Link to='/signup-with-email' className='h-[27px] flex items-center    px-[14px]'>Sign in</Link>


</div>



<div className='border-t border-t-[#C8C4C4] px-[10px]  text-xs leading-[7px] text-[#797777]  flex gap-x-3 pt-1'>


<Link to={contentpolicy} className='h-[26px] flex items-center'>Content policy</Link>

<Link to={termsofservices} className='h-[26px] flex items-center'>Terms</Link>

<Link to={about} className='h-[26px] flex items-center'>About</Link>

</div>







    </div>
}



export default function Navbar({bg}){

const toggleBox = ()=>{
    

        document.querySelector('.smallBox').classList.toggle('hideIt')
       
}



    return <div className={` h-[98px] w-full flex   justify-between pl-[71px] pr-[61px]       ${bg?bg:'navbarbg'} items-center tabtolargemob:px-6 largemobtomob:flex-col largemobtomob:h-auto largemobtomob:py-5 largemobtomob:justify-center largemobtomob:gap-y-4`}>


<div className="flex gap-[132px] tabtolargemob:gap-12 mobile:gap-6 items-center ">

<Link to='/' className='w-[55px] h-[61px]'>
    
    <img src={logo} className='w-full max-w-full h-full object-cover' alt="" />

</Link>

<div className='flex gap-16 mobile:gap-8 mobile:text-xs tabtolargemob:gap-12 text-[rgba(255,253,253,0.9)] font-medium '>
    <p className='leading-5'>Search</p>
    <Link to='/introduction' className='leading-5'>What is Watch Dogs?</Link>
</div>


</div>

<div className='relative'>

<div className='cursor-pointer' onClick={toggleBox}>
    
<div className="flex  gap-x-6 items-center justify-end ">

<div className="flex gap-x-1" >
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
</div>

<div  className="w-12 h-12 rounded-full bg-[#D9D9D9]"></div>


</div>



</div>


<div   style={{transition:'all 0.3s'}} className='smallBox hideIt absolute  right-0 mobile:right-[50%] mobile:translate-x-[50%] top-16 '>
<Box/>
</div>


</div>


    </div>
}