
import AuthCommonScreens from "../components/AuthCommonScreens";


export default function VerifyYourEmail(){


    return (

        <AuthCommonScreens >


<div className="commonFlex flex-col gap-y-[18px] w-[397px]">

<p className="leading-10 text-[32px] font-bold">Verify your email</p>

<div className="w-[245px] leading-6 text-center font-medium  text-[#3C3A3A]">

<p>We sent an email to romain.bernus@gmail.com <br /> Click the link inside to get started.</p>


<p className="leading-10 font-medium text-[#A445C6]">Resend email</p>


</div>


</div>




        </AuthCommonScreens>


    )


}