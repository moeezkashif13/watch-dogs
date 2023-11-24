import AuthCommonScreens from "../components/authCommonScreens";

import MetamaskLogo from '../assets/walletlogos/metamask.svg'
import CoinbaseLogo from '../assets/walletlogos/coinbase.svg'
import WalletConnectLogo from '../assets/walletlogos/walletconnect.svg'
import { iwilldoitlater, privacypolicy, termsofservices } from "../components/linksforfutureuse";



export default function ConnectYourWallet(){


    return <AuthCommonScreens>

        {/* <div className="absolute top-[98%] left-0 w-full h-[231px] bg-yellow-500"></div> */}

<div className="commonFlex flex-col gap-y-[18px]">


<p className="font-bold text-[32px] leading-10 ">Connect your wallet</p>


<div className="space-y-3 font-bold text-[20px] leading-10 text-white w-[397px]">


<div className="flex gap-x-4 items-center bg-[#151515] px-5 py-2 rounded-[15px]" style={{boxShadow: '0px 1px 4px 0px #00000080'}} >
    <div className="w-6 h-6 ">
        <img src={MetamaskLogo} className="imageCommon" alt="" />
    </div>
    <p>Install Metamask</p>
</div>


<div className="flex gap-x-4 items-center bg-[#151515] px-5 py-2 rounded-[15px]" style={{boxShadow: '0px 1px 4px 0px #00000080'}} >
    <div className="w-6 h-6 ">
        <img src={CoinbaseLogo} className="imageCommon" alt="" />
    </div>
    <p>Coinbase Wallet</p>
</div>


<div className="flex gap-x-4 items-center bg-[#151515] px-5 py-2 rounded-[15px]" style={{boxShadow: '0px 1px 4px 0px #00000080'}} >
    <div className="w-6 h-6 ">
        <img src={WalletConnectLogo} className="imageCommon" alt="" />
    </div>
    <p>WalletConnect</p>
</div>

</div>



<a href={iwilldoitlater} className="underline text-[#494848] typo2">I’ll do it later</a>



<p className="text-[#949292] text-[17px] leading-6 font-medium w-[372px] mx-auto text-center">By connecting a wallet, you agree to WatchDogs’ <a href={termsofservices} className="text-[#4B61D8]"> Terms of Service </a> and consent to its <a href={privacypolicy} className="text-[#4B61D8]"> Privacy Policy. </a> </p>



</div>



    </AuthCommonScreens>

}