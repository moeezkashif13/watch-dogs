import logo from '../assets/logo.png'

import googlelogo from '../assets/googlelogo.svg'
import microsoftlogo from '../assets/microsoftlogo.svg'
import AuthCommonScreens from '../components/AuthCommonScreens'

import {ContinueButton} from '../components/utils'



export default function SignupScreen(){

    return <AuthCommonScreens>


<div className='w-[385px] font-bold text-[32px] leading-[40px] py-[28px] text-center'>Create your account</div>


<div className='w-[353px]  '>

<div className='space-y-3'>

<div className=' relative border-solid border-[1.3px] border-[#69008D] '>

<p className='text-[#AA48CD] typo1 absolute -top-[20px] left-3.5 px-2 bg-white'>Email address</p>


<input type="text" className='w-full py-2 px-[22px] outline-none border-none text-[#949292] placeholder:text-[#949292] font-medium leading-10 text-[17px]' placeholder='Email Address' />



</div>

<ContinueButton/>


</div>

<p className='pt-1.5 text-center text-[#4E4C4C] text-sm font-medium leading-10'>Already have an account? <span className='text-[#B946FF]'> Log in</span></p>



<div className='flex items-center'>


<div className='h-[0.5px] bg-[#686767] flex-grow'></div>

<p className='w-[41px] h-[37px] ml-1 mr-3 commonFlex typo1'>OR</p>


<div className='h-[0.5px] bg-[#686767] flex-grow'></div>


</div>





<div className='space-y-3'>

<div className=' transition-all hover:bg-black hover:text-white cursor-pointer w-full py-2 rounded-sm border border-black gap-x-3 flex items-center px-5'>

<div className='w-5 h-5 '>

<img src={googlelogo} className='imageCommon' alt="" />


</div>

<p className='typo1'>Continue with Google</p>

</div>


<div className=' transition-all hover:bg-black hover:text-white cursor-pointer w-full py-2 rounded-sm border border-black gap-x-3 flex items-center px-5'>

<div className='w-5 h-5 '>

<img src={microsoftlogo} className='imageCommon' alt="" />


</div>

<p className='typo1'>Continue with Microsoft Account</p>

</div>

</div>




</div>


    </AuthCommonScreens>

}