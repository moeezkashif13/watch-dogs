import logo from '../assets/logo.png'

import googlelogo from '../assets/googlelogo.svg'
import microsoftlogo from '../assets/microsoftlogo.svg'

export default function AuthCommonScreens({children}){


return <div className="flex flex-col  items-center h-[985px] pt-[71px]">
        

<div className="w-[55px] h-[61px] ">
    <img src={logo} className='w-full h-full max-w-full object-cover' alt="" />
</div>

<div className='mt-[103px] w-[477px]   flex flex-col items-center'>


{children}


</div>

    </div>

}