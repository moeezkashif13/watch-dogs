import { useEffect, useState } from "react"
import AuthCommonScreens from "../components/AuthCommonScreens"
import  axios from 'axios';


export default function VerifyMobile(){

    


    const [countries,setCountries] = useState([]);
    const [error,setError] = useState(false)

    const [countryCode,setCountryCode] = useState(null);
    const [showDropdown,setShowDropdown] = useState(false);
    const [mobileNumber,setMobileNumber] = useState('');

    const [selectedCountry,setSelectedCountry] = useState(null);



    useEffect(()=>{

        const fetchCountries = async ()=>{

            try {

                
                const allCountries = await axios.get('https://restcountries.com/v3.1/independent?fields=name,idd,flags');

                
                setError(false)
                setCountries(allCountries.data)


                
            } catch (error) {

                setError(true);
                
            }
            

        }

        fetchCountries()


    },[])


    const selectCountry = (data)=>{

        setSelectedCountry(data)

        if(data.idd.suffixes.length==1){

            setCountryCode(data.idd.root+data.idd.suffixes[0])


        }else {
            
            setCountryCode(data.idd.root)

        }
        
        setSearchedCountries(countries)
        



    }

const [searchCountries,setSearchedCountries] = useState(countries);

    const searchCountry = (event)=>{

        setShowDropdown(true);

        if(!event.target.value){
        
            console.log('checkkk');
            setSearchedCountries(countries)
        
            return;
        
        }
        
        
        const searchedCountries = countries.filter(eachCountry=>{
          
            
            
            if(eachCountry.name.official.toLowerCase().includes(event.target.value.toLowerCase())){
            
                return eachCountry
            }

        })

        setSearchedCountries(searchedCountries)


    }



    return         <AuthCommonScreens >


    <div className="commonFlex flex-col gap-y-[18px] w-[397px]">


    {error?<div>Error occured</div> : <>
    <p className="leading-10 text-[30px] font-bold">Verify your phone number</p>
    
    
    <div className="text-[#949292] flex gap-x-2 text-[20px] relative">
    
    {/*  */}
    <div onClick={()=>setShowDropdown(oldVal=>!oldVal)} className=" w-[93px] h-[58px] flex items-center  rounded-[5px] border-2 border-[#D1B2BC] " style={{boxShadow: '0px 1px 4px 0px #00000080'}}  >
    
    <div type="text" className=" cursor-pointer placeholder:text-[#949292] leading-10  font-medium mx-[10px]  outline-none border-none  w-full  h-[40px] flex justify-between items-center"  >
        
        <div className="w-[45px] h-[80%]   ">



<img src={selectedCountry?selectedCountry?.flags?.png:countries[0]?.flags?.png} className="imageCommon" alt="" />



        </div>

<p className="ml-auto">ic</p>

    </div>

{showDropdown&&

    <div className="absolute w-[240px] h-[350px] overflow-y-scroll navbarbg top-[60px] left-0 text-white space-y-2 py-3 ">


<input onClick={()=>setShowDropdown(false)} onChange={searchCountry} type="text" className="w-full py-3 bg-transparent px-5 outline-none border-none text-sm" placeholder="Search Country" name="" id="" />



{searchCountries.length>0?searchCountries.map(eachCountry=>{
    
    return <div onClick={()=>selectCountry(eachCountry)} style={{transition:'all 0.3s '}} className="cursor-pointer hover:bg-green-500 py-2 flex items-center justify-between px-4 text-sm">

        <div className="w-10 h-8 rounded-[3px] ">
            <img src={eachCountry.flags.png} className="imageCommon" alt="" />
        </div>

        <p className="text-right">{eachCountry.name.common}</p>


    </div>

}):countries.map(eachCountry=>{
    
    return <div onClick={()=>selectCountry(eachCountry)} style={{transition:'all 0.3s '}} className="cursor-pointer hover:bg-purple-500 py-2 flex items-center justify-between px-4 text-sm">

        <div className="w-10 h-8 rounded-[3px] ">
            <img src={eachCountry.flags.png} className="imageCommon" alt="" />
        </div>

        <p className="text-right">{eachCountry.name.common}</p>


    </div>
})}



    </div>

}






</div>

{/*  */}
    

{/*  */}
<div className="w-[287px] h-[58px] flex items-center  rounded-[5px] border-2 border-[#D1B2BC] px-[10px] font-medium space-x-2 " style={{boxShadow: '0px 1px 4px 0px #00000080'}}>
    
    <p className="text-[#2D2D2D]">{countryCode?countryCode:countries[0]?.idd?.root+countries[0]?.idd?.suffixes[0]}</p>

    <input type="text" className="placeholder:text-[#949292] leading-10  font-medium   outline-none border-none  w-full  h-[40px]"    />


</div>
{/*  */}
    
    
    
    
    </div>
    
    
    
    <button className='btnGradient py-2 flex justify-center items-center w-full font-medium text-white leading-10 rounded-[4px]'>Send code</button>
    
    
    </>
    
}
    
    </div>
    
    
    
            </AuthCommonScreens>


}