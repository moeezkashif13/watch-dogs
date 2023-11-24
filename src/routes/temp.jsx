import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import { contentpolicy, termsofservices } from '../components/linksforfutureuse'

import {Link} from 'react-router-dom'

const OnePopup = ()=>{
    return <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
    
    <div className="w-[492px] ">


<div className="h-[234px] w-full ">

<img src={img1} className="imageCommon" alt="" />

</div>


<div className="bg-[#F1F1F1] rounded-b-[30px] ">


<div className="w-[401px] mx-auto h-[275px] pt-6    space-y-6">



<div className="flex gap-x-2 justify-center">
    
    <div className="w-5 h-5 boxbg"></div>

<p className="font-medium leading-5">10</p>

</div>



<div className="space-y-4 text-[#2B2B2B] leading-5 font-medium">
    <p>You get 50 free credits during your first month, and 15 free credits will refill every month after that. </p>
    <p>You can always buy additional credits. <span className="font-bold"> Learn more</span></p>
</div>



<div className="bg-[#5D5C5E]  h-[55px] flex justify-center items-center text-[17px] leading-10 font-medium text-white rounded-lg cursor-pointer">Start tracking with WatchDogs</div>

</div>



</div>


    </div>




</div>
}


const TwoPopup = ()=>{
    return     <div className='py-10 flex justify-center'>
<div className="w-[492px] ">


<div className="h-[234px] w-full ">

<img src={img2} className="imageCommon" alt="" />

</div>


<div className="bg-[#F1F1F1] rounded-b-[30px] ">


<div className="w-[401px] mx-auto  pt-6 pb-9    space-y-4">
    

    <div>
        <p className='text-2xl leading-10 font-semibold'>Welcome to WatchDogs</p>
        <p className='font-medium text-lg leading-10 text-[#727272]'>Meet your creative copilot.</p>
    </div>


    <p className='text-lg font-bold '>Search and learn with WatchDogs to..</p>


<ul className='font-medium pl-6 leading-5 text-[#2B2B2B] text-[15px] space-y-5 list-disc'>
    <li>Search any wallet addresses on the Ethereum blockchain and understand their NFT activity.</li>
    <li>Create watchlists, track wallet addresses and get notified when trades happen. </li>
    <li>Export the wallet data to build your own analysis. </li>
</ul>


<div className='pt-5'>
<div className="bg-black  h-[55px] flex justify-center items-center text-[17px] leading-10 font-medium text-white rounded-lg cursor-pointer">Continue</div>
</div>
    

    <p className='w-[372px] mx-auto text-center leading-6 font-medium text-[#9D9A9E]'>By clicking ‘Continue”, you agree to our <a className='font-bold text-[#626262]' href={termsofservices}> terms </a> and <a className='font-bold text-[#626262]' href={contentpolicy}> content policy </a></p>


</div>



</div>


    </div>
    </div>
}



const BuyCreditsPopup = ()=>{


    return <div className='w-[370px] bg-white rounded-xl px-8 py-6 space-y-8'>

<p className='text-xl font-semibold'>Buy Credits</p>

<div className='mx-auto flex flex-col items-center gap-y-5'>


    <div className='relative'>
        <div className='w-12 h-12 bg-green-500 rounded-full'></div>
        <div className='absolute top-0 right-0 w-6 h-6 bg-orange-500'></div>
    </div>

    <p className='font-semibold'>115 credits</p>


    <p className='font-medium'>$15 USD</p>


    <div className='flex gap-x-3 items-center'>

    <div>ic</div>

    <div className='h-9 w-9 rounded-md border flex justify-center items-center'>
    <input type="text" className='w-full h-full text-center bg-transparent outline-none' value={1} name="" id="" />
    </div>

    <div>ic</div>


    </div>


</div>

<div className='flex gap-x-4  font-semibold text-sm'>


<div className='w-[70px] h-[40px]  bg-[#ECECF1] flex justify-center items-center rounded-md'>Cancel</div>



<div className='flex-grow h-[40px] text-white bg-black flex justify-center items-center rounded-md'>Continue</div>



</div>



    </div>


}



const OrderSummaryPopup = ()=>{
    return <div className='px-8 py-12 rounded-2xl w-[570px] bg-white space-y-7'>


    <div className='space-x-4 text-xl font-semibold '> 
        <span>ic</span>
        <span>Order summary</span>
    </div>



<div className='space-y-7'>

<div className='space-y-6'>

<div className='flex text-[#ADADAD] font-medium'> 
    <p>Description</p>
    <p className='ml-auto'>Amount</p>
</div>


<div className=''>

     <div className='border-t border-b py-4 justify-between text-lg flex font-medium'>

        <p>115 credits</p>
        <p>$15.00 USD</p>

    </div>


</div>


<div className='  flex  font-medium justify-end gap-x-4'>

<p className='text-[#8D8D8D] '>Estimated tax</p>

<p>$0.00 USD</p>


</div>


<div className='  flex font-medium justify-end gap-x-4'>

<p className='text-[#8D8D8D] '>Estimated total</p>

<p>$15.00 USD</p>


</div>




</div>



<div className='text-[#8D8D8D]  font-medium'>
    <p className='mb-2'>Paid credits will expire one year from today.</p>
    <Link to={termsofservices}>Terms</Link>
</div>



</div>






    <div className='space-y-6 pt-6'>

<p className='font-semibold text-xl'>Payment method</p>








<div className='space-y-4 font-medium'>
{[1,2].map(elem=>{
    return <div className='px-4 py-5 rounded-md gap-x-4 border items-center flex'>

        <div className='w-14 h-9 bg-orange-500'></div>

    <div >
        <p className='text-lg'>Visa</p>
        <p className='text-[#8D8D8D] text-sm'>Expires 09/2026</p>
    </div>

    <div className='ml-auto'>ic</div>


    </div>
})}

</div>


<div className='text-right font-semibold space-x-3'>
    <span>ic</span>
    <span>Add payment method</span>
</div>




    </div>



    <div className='flex gap-x-4  font-semibold text-sm'>


<div className='w-[70px] h-[50px]  bg-[#ECECF1] flex justify-center items-center rounded-md'>Back</div>



<div className='flex-grow h-[50px] text-white bg-black flex justify-center items-center rounded-md'>Complete Payment</div>



</div>



    </div>
}



export default function Temp(){
    return <div className="bg-black  ">
        
        
    {/* <TwoPopup/> */}
    
    
    <div className='w-full py-20   flex justify-center items-center'>
        
{/* <BuyCreditsPopup/> */}


<OrderSummaryPopup/>


</div>

    </div>





}