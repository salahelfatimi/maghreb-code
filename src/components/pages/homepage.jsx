'use client'
import Image from "next/image";

export default function Homepage(){
    const handleClick = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      
    };
    return(
       
        <div  id="home" className="flex flex-col  pt-24  gap-14 items-center  h-screen    bg-cover bg-top  bg-[url('/bgtop.png')]  ">
           
                <div className="flex flex-col justify-center items-center  gap-6 ">
                    <h2 className=" text-center font-bold text-2xl lg:text-5xl text-white flex flex-col gap-4  items-center">Elevate Your Business with Maghreb Code <span className=" bg-[#B3D12F] py-2 px-4 w-fit">Web & Mobile Solutions</span>    </h2>
                    <button onClick={()=>(handleClick())} className=" bg-white border-[#B3D12F] border-4 lg:px-8 px-4 py-2  font-semibold lg:text-2xl rounded-full text-[#B3D12F]">Explore Our Services</button>
                </div>
                <Image src={'/bg.png'} width={1920} height={540}  className=" h-screen animate-pulse min-w-full w-full object-cover object-top"/>
                {/* <div className="flex lg:flex-row flex-col px-2  justify-between items-center  gap-2 lg:gap-0">
                    <p className="bg-[#B3D12F]    uppercase lg:w-full  lg:py-52 text-lg font-semibold text-white border-4  w-full h-16 flex items-center justify-center">create mobile app</p>
                    <p className="bg-[#fff]     uppercase lg:w-full  lg:py-28 text-lg font-semibold text-[#B3D12F]  border-4 border-[#B3D12F]  w-full h-16 flex items-center justify-center">create website</p>
                    <p className="bg-[#B3D12F]     uppercase lg:w-full  lg:py-16 text-lg font-semibold text-white border-4  w-full h-16 flex items-center justify-center">create Logo </p>
                    <p className="bg-[#fff]     uppercase lg:w-full  lg:py-28 text-lg font-semibold text-[#B3D12F]  border-4 border-[#B3D12F]  w-full h-16 flex items-center justify-center">web Marketing</p>
                    <p className="bg-[#B3D12F]     uppercase lg:w-full  lg:py-52 text-lg font-semibold text-white border-4 w-full h-16 flex items-center justify-center">Create figma designee</p>
                </div>
                */}
        </div>
      
    )
}