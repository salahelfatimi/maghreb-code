import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer(){
    return(
      <footer className="bg-[#1E1E1E] py-8">
        <div className=" flex flex-col gap-4 lg:flex-row items-center justify-between  container ">
          <p className={` flex  flex-col lg:flex-row  text-xl items-center font-semibold capitalize text-center lg:text-start text-white `}>
            Copyright &copy; {new Date().getFullYear()} .All rights are reserved by 
            <span className=" text-[#b3d12f]  uppercase ">
              maghreb digital
            </span>
          </p>
          <div className="flex gap-6">
          <Instagram size={30} className=" stroke-[#b3d12f]" />
          <Linkedin size={30} className=" stroke-[#b3d12f]" />
          <Phone size={30} className=" stroke-[#B3D12F]"/>
          <Mail size={30} className=" stroke-[#B3D12F]"/>
          </div>
        </div>
      </footer>
      
    )
}