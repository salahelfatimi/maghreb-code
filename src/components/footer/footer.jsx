import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="bg-[#1E1E1E] py-8">
        <div className=" flex flex-col gap-4 lg:flex-row items-center justify-between  container ">
          <p className={` flex  flex-col lg:flex-row  text-xl items-center font-semibold capitalize text-center lg:text-start text-white `}>
            Copyright &copy; {new Date().getFullYear()} .All rights are reserved by 
            <span className=" text-[#b3d12f]  uppercase ">
              maghreb code
            </span>
          </p>
          <div className="flex gap-6">
          <Link href={'https://www.instagram.com/maghreb_code/'} target="_blank" ><Instagram size={30} className=" stroke-[#b3d12f]" /></Link>
          {/* <Linkedin size={30} className=" stroke-[#b3d12f]" /> */}
          {/* <Phone size={30} className=" stroke-[#B3D12F]"/> */}
          <Link href={'mailto:maghrebcode.contact@gmail.com'} target="_blank" ><Mail size={30} className=" stroke-[#B3D12F]"/></Link>
          </div>
        </div>
      </footer>
      
    )
}