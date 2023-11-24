
import Navbar from "../components/navbar";
import verified from '../assets/verified.svg'
import {ETHAddress} from '../components/utils'
import {useMemo} from 'react'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../components/utils/data";
import DoughnutChart from "../components/doughnutChart";
import BubbleChart from "../components/bubbleChart";
import { Table } from "@table-library/react-table-library";
import CreatedTable from "../components/tablerelated/table";

Chart.register(CategoryScale);


const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
          ],
          borderWidth: 1,
        }
    ]
}


  



const First = ()=>{
    
    
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              '#D946AA',
              '#F19C44',
              '#A510FF'
            ],
            borderColor: "transparent",
            borderWidth: 0
          }
        ]
      });
    


    return <div className="px-[45px] bg-[#333639] w-[716px] rounded-3xl pt-4 " style={{boxShadow: '0px 1px 50px 0px #0000000A'}}>


    <p className=" h-[85px] font-medium text-[40px] leading-[56px] -tracking-[2px]">Total Balance</p>
    
    
    <p className=" h-[85px] w-[401px] font-bold text-[65px] leading-[56px] " style={{textShadow: '7px 7px 12px rgba(0,0,0,0.6)'}} >$101,230</p>
    
    
    
    <div className="mx-auto w-[392px] h-[392px]  rounded-full">
    
    
    <DoughnutChart chartData={chartData} />

    
    </div>
    
    
    <div className="mt-14 font-bold  text-[20px]  leading-[56px] -tracking-[2px] flex gap-x-10 justify-center">
    
    
    <div className="flex  gap-x-2 items-center ">
    
        <div className="w-[14px] h-[14px] rounded-[1px] bg-[#A510FF]"></div>
    <p className="w-[123px]  ">ETH  Balance</p>
    </div>
    
    <div className="flex  gap-x-2 items-center">
    
        <div className="w-[14px] h-[14px] rounded-[1px] bg-[#D946AA]"></div>
    <p className="w-[123px]  ">Token Balance</p>
    </div>
    
    <div className="flex  gap-x-2 items-center">
    
        <div className="w-[14px] h-[14px] rounded-[1px] bg-[#F19C44]"></div>
    <p className="w-[123px]  ">NFT  Balance</p>
    </div>
    
    
    
    </div>
    
    
    
    
    
    
    
    </div>
    
}



const Second = ()=>{
    return <div className="w-[716px] bg-[#333639] rounded-3xl pt-4">
        
        <div className="px-[45px]  relative  " style={{boxShadow: '0px 1px 50px 0px #0000000A'}}>



        <div className="absolute w-[207px] h-[29px] right-0 top-[50px] font-medium text-[20px] leading-7 -tracking-[1.1px]">3M  <span className="text-[#BDBBBB]">/ 6M </span> <span className="text-[#BDBBBB]">/ 12M </span></div>


    <p className="h-[85px] font-medium text-[40px] leading-[56px] -tracking-[2px]">Actual Profitability</p>
    
    
    <p className=" h-[85px] w-[401px] text-[#2DE93F] font-bold text-[65px] leading-[56px] " style={{textShadow: '7px 7px 12px rgba(0,0,0,0.6)'}}>+$20,457</p>
            

    </div>


    <div className="mt-[55px] space-y-3 h-[324px] pl-[45px] pr-7 overflow-y-scroll">

{[1,2,3,4,5,6,7,8,9].map(()=>{
    return <div className="flex gap-x-[53px]  items-center">

        <div className="w-[72px] h-[72px] bg-green-500  rounded-[10px]"></div>

    <div className="space-y-1.5">
        <p className="font-bold text-[27px]  -tracking-[2px]">Clone X  #10098</p>
        <p className="text-[#F19C44] font-medium  text-[20px] ">12 hours ago</p>
    </div>

<div className="ml-auto font-bold text-[27px] leading-12">6.9 ETH</div>


    </div>
})}


    </div>



    </div>
    
}

const Heading = ({text})=>{
    return <div className="font-bold text-[40px] leading-12 tracking-[2px]">{text}</div>
}


const Third = ()=>{

    return <div className="bg-[#333639] h-[719px] rounded-3xl  py-4">
        
<div className="flex flex-col px-9">

<div className="flex items-center">    


<Heading text='NFT Collections' />


<p className="ml-auto">
    <span>OWNED  BY  WALLET: </span>
    <span>0x123Hdedhei00012htg...</span>
</p>

</div>

<div className="uppercase flex font-bold text-[20px] leading-12  text-[#E2E2E2]">
    
    <p className="w-[40%]">Collection</p>
    <p className="text-center w-[15%]">Floor Price</p>
    <p className="text-center w-[15%]">Profit</p>
    <p className="text-center w-[15%]">Minted</p>
    <p className="text-center w-[15%]">Total</p>





</div>




</div>






<div className="px-5 space-y-3 flex flex-col h-[550px] overflow-y-scroll">


{[1,2,3,4,5,6,7,8].map((elem)=>{
    return <div className="px-4 odd:bg-[#FFFFFF0F] min-h-[100px] flex items-center ">

<div className="w-[40%] flex gap-x-8 items-center">

<p className="font-bold text-[30px] leading-12 min-w-[16px]">{elem}</p>

<div className="w-[72px] h-[72px] rounded-[10px] bg-purple-500 "></div>

<p className="font-bold relative text-[27px] leading-12 -tracking-[2px]">Clone X <span className="ml-3 absolute top-3 w-[32px]  h-[32px] ">
        <img src={verified} className="imageCommon " alt="" />
    </span></p>

</div>



<div className=" w-[15%] text-center font-bold  text-[27px] leading-8 flex flex-col relative"><p>10.3 ETH</p> <p className="text-base absolute -bottom-[80%] left-[50%] -translate-x-[50%]  text-[#31CF61]">+34% </p>  </div>



<div className=" w-[15%] text-center flex flex-col font-bold  text-[27px] leading-8 ">10 ETH</div>
<div className=" w-[15%] text-center flex flex-col font-bold  text-[27px] leading-8 ">3</div>
<div className=" w-[15%] text-center flex flex-col font-bold  text-[27px] leading-8 ">12</div>



    </div>
})}

    
</div>





    </div>

}


const Fourth = ()=>{

   

    return <div className="bg-[#333639] h-[719px] rounded-3xl  py-4">
        
<div className="flex flex-col px-9">

<div className="flex items-center">    


<Heading text='NFT Transactions' />


<p className="ml-auto">
    <span>OWNED  BY  WALLET: </span>
    <span>0x123Hdedhei00012htg...</span>
</p>

</div>


{/* <div className="flex flex-col">


<div className="py-4  flex  justify-between font-bold text-[27px] leading-12 text-[#FCFAF4] text-center">

<p>Txn Hash</p>

<p className=" ">Date</p>


<p className="">From</p>



<p className="">To</p>


<p>Token ID</p>



<p>Profit/Loss</p>


<p>Type</p>





</div>



{[1,2,3,4,5].map(elem=>{

return <div className="py-3 border-b border-[#898787] flex justify-between text-center text-[20px] leading-12 font-medium">


<p>0x123Hei0001223dju...</p>


<p >15 days 4 hrs ago</p>

<p>Null Address: 0x00...00</p>

<p>0x45ty7632skjdbcbu...</p>

<p>3</p>

<p>None</p>

<p>ERC-721</p>

</div>

})}






</div> */}

<div className="text-black" >
<CreatedTable/>

</div>



</div>










    </div>

}


const Fifth = ()=>{

    // const data = {
    //     datasets: [{
    //     //   label: 'First Dataset',
    //       data: [{
    //         x: 0,
    //         y: 0,
    //         r: 15
    //       }, {
    //         x: 3,
    //         y: 5,
    //         r: 8
    //       }],
    //       backgroundColor: 'rgb(255, 99, 132)'

    //     }]
    //   };



    return <div className="bg-[#333639] h-[719px] rounded-3xl  py-4">
        
<div className="flex flex-col px-9">

<div className="flex items-center">    


<Heading text='NFT Transactions (Profit/Loss)' />


<p className="ml-auto">
    <span>OWNED  BY  WALLET: </span>
    <span>0x123Hdedhei00012htg...</span>
</p>

</div>



<div className="w-[1150px] h-[600px] text-white mx-auto">

    {/* <BubbleChart chartData={data} /> */}
    <BubbleChart  />


</div>







</div>










    </div>

}




export default function Dashboard(){

  



    return <div className="bg-black  text-white ">


{/* <Navbar/> */}

<div className="flex flex-col items-center">

<div className="w-[956px] h-[146px] commonFlex  font-medium text-[67px] leading-[68px]">Watch Dogs</div>


<div className="w-[1150px] mt-[10px]">
<ETHAddress/>
</div>


</div>



<div className="px-[41px]">



<div className="mt-20 font-medium " style={{fontFamily: 'DM Sans, sans-serif'}}>

<span className="text-white text-4xl leading-[56px] -tracking-[2px]" >Address:</span>

<span className="text-[#B8B6B9] text-3xl leading-8 ml-5">0x123Hdedhei0001223332dju</span>

</div>



<div className="mt-[14px] space-y-4  " style={{fontFamily: 'DM Sans, sans-serif'}}>

<div className="flex  gap-x-3">
<First/>
<Second/>
</div>





<Third/>


<Fifth/>


<Fourth/>





</div>





</div>



    </div>

}