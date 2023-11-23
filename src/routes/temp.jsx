import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import { contentpolicy, termsofservices } from '../components/linksforfutureuse'


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




export default function Temp(){
    return <div className="bg-black  ">
        
        
    <TwoPopup/>
    
    

    </div>





}