import logo from '../assets/logo.png'


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


    <p className='h-[27px] flex items-center    px-[14px]'>My portfolio</p>

    <p className='h-[27px] flex items-center    px-[14px]'>What is Watch Dogs?</p>


    <p className='h-[27px] flex items-center    px-[14px]'>Sign Up &nbsp; <span className='text-[#383838] text-[10px] leading-3'>(Get <span>10</span> extra search credits)</span></p>


    <p className='h-[27px] flex items-center    px-[14px]'>Sign in</p>


</div>



<div className='border-t border-t-[#C8C4C4] px-[10px]  text-xs leading-[7px] text-[#797777]  flex gap-x-3 pt-1'>


<p className='h-[26px] flex items-center'>Content policy</p>

<p className='h-[26px] flex items-center'>Terms</p>

<p className='h-[26px] flex items-center'>About</p>

</div>







    </div>
}



export default function Navbar(){

const toggleBox = ()=>{
    

        document.querySelector('.smallBox').classList.toggle('hideIt')
       
}



    return <div className=" h-[98px] w-full flex   justify-between pl-[71px] pr-[61px]  navbarbg items-center">


<div className="flex gap-[132px] items-center ">

<div className='w-[55px] h-[61px]'>
    
    <img src={logo} className='w-full max-w-full h-full object-cover' alt="" />

</div>

<div className='flex gap-16 text-[rgba(255,253,253,0.9)] font-medium '>
    <p className='leading-5'>Search</p>
    <p className='leading-5'>What is Watch Dogs?</p>
</div>


</div>


<div>
    
<div className="flex  gap-x-6 items-center justify-end relative">



<div   style={{transition:'all 0.3s'}} className='smallBox hideIt absolute right-0 top-16 '>
<Box/>
</div>






<div className="flex gap-x-1" onClick={toggleBox}>
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
    <div className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></div>
</div>

<div onClick={toggleBox} className="w-12 h-12 rounded-full bg-[#D9D9D9]"></div>


</div>





</div>


    </div>
}