import { Phone } from "lucide-react";
import Link from "next/link";

export default function PhoneIcon(){
    return(
        <div className=" z-40 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <span className="   text-sm  text-center text-[#B3D12F] select-none  bg-[#303030] rounded-full items-center justify-center py-2 px-4">
          <div>Need help?</div>
          <strong>Contact us</strong>
        </span>
        <Link href="https://wa.me/+212644001490" target="_blank" className="bg-[#B3D12F] border-4 border-[#303030]  w-fit p-4 rounded-full ">
          <Phone size={25} className=" stroke-white stroke-2"/>
        </Link>
        
      </div>
    )
}