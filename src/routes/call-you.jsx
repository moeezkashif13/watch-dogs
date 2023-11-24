import { Link } from "react-router-dom";
import AuthCommonScreens from "../components/authCommonScreens";
import { termsofservices } from "../components/linksforfutureuse";
import { ContinueButton } from "../components/utils";

export default function CallYou(){


    return (

        <AuthCommonScreens >


<div className="commonFlex flex-col gap-y-[18px] w-[397px]">

<p className="leading-10 text-[32px] font-bold">What should we call you?</p>


<div className="text-[#949292] flex gap-x-2 text-[20px]">

{['First Name','Last Name'].map(elem=>{
    return     <div className="w-[194px] h-[58px] flex items-center  rounded-[5px] border-2 border-[#D1B2BC] " style={{boxShadow: '0px 1px 4px 0px #00000080'}}>

    <input type="text" className="placeholder:text-[#949292] leading-10  font-medium mx-[21px] bg-transparent outline-none border-none w-full  h-[40px]"  placeholder={elem}  /> 


</div>
})}





</div>






<ContinueButton/>


<p className="text-center text-[#949292] font-medium leading-6">By clicking ‘Continue”, you agree to our <Link to={termsofservices} className="text-[#6D2D84]"> Terms </Link> and confrim you’re 18 years or older. </p>


</div>




        </AuthCommonScreens>


    )


}