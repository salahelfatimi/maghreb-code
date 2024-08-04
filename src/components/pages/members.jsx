import Image from "next/image";
import Elfatimi from "/public/members/elfatimi.png";
import { Instagram, Linkedin } from "lucide-react";

export default function Membres(){
    return(
        <div className=" container flex flex-col gap-6">
            <h2 className=" text-3xl lg:text-6xl text-center text-white font-semibold">Our  <span className=" text-[#B3D12F]">Teams</span></h2>
            <div className=" flex items-center  justify-center">
                <div className="bg-[#1E1E1E] w-fit py-6 px-4 rounded-3xl  items-center gap-6 flex justify-center flex-col">
                    <img src='/members/elfatimi.png' className=" w-32 lg:w-56  rounded-xl" />
                    <h3 className="bg-[#B3D12F] text-white p-2 font-bold text-xl lg:text-3xl"> salaheddine elfatimi</h3>
                    <p className="w-fit p-2 text-[#fff] font-bold lg:text-xl">Full stack developer & web marketing</p>
                    <div className=" flex flex-row gap-4">
                        <Instagram size={35} className=" stroke-[#B3D12F]"/>
                        <Linkedin size={35} className=" stroke-[#B3D12F]"/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}