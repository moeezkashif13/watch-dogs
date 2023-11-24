import Navbar from "../components/Navbar";


export default function Introduction(){

    return <div>

<Navbar bg="bg-black" />


<div className="introbg  pt-[70px] pb-[120px] largemobtomob:pb-[70px]  space-y-10">


<div className="w-[658px] desktotab:w-full mx-auto text-center text-white text-[50px] leading-[68px] font-medium">What is <br />WatchDogs?</div>

<div className="desktotab:px-8 largemobtomob:px-4">
<div className="rounded-[40px] desktotab:rounded-2xl  max-w-[1140px] mx-auto pt-20 largemobtomob:pt-8  pb-24 largemobtomob:pb-8 text-white bg-[#0B0700] space-y-16 desktotab:space-y-6">

<div className="desktotab:px-6 largemobtomob:px-4 px-16 text-[40px] largemobtomob:text-3xl leading-12 font-medium">Transparency.. </div>


<div className="desktotab:px-12 largemobtomob:px-7 px-28 desktotab:text-base desktotab:leading-7  text-2xl  leading-10 font-medium">

<ul className="list-disc">

<p>DALL·E is an AI system developed by OpenAI that can create original, realistic images and art from a short text description.
It can make realistic and context-aware edits, including inserting, removing, or retouching specific sections of an image from a natural language description. It can also take an image and make novel and creative variations of it inspired by the original.
</p>

<p>How DALL·E Works</p>

<li className="ml-16 largemobtomob:ml-8">DALL·E was trained by learning the relationship between images and the text used to describe them.</li>

<li className="ml-16 largemobtomob:ml-8">It uses a process called diffusion, which starts with a pattern of random dots and gradually alters that pattern towards a final output.</li>


</ul>


<ul className="list-disc">
    <p>DALL·E Credits</p>
    <li className="ml-16 largemobtomob:ml-8">A credit can be used for one DALL·E request: generating images through a text prompt, an edit request, or a variation request.</li>
    <li className="ml-16 largemobtomob:ml-8">You get 50 free credits your first month, and 15 free credits will refill every month after that. Free credits don’t roll over, so they’ll expire a month after they were granted.</li>
    <li className="ml-16 largemobtomob:ml-8">You can purchase additional credits through your account page.</li>
</ul>


</div>


</div>

</div>


</div>




    </div>

}