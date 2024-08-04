import Image from "next/image";
import { Fredoka } from "next/font/google";

import Link from "next/link";
import { Menu } from "lucide-react";
export default function Navbar (){
    const navItem=[
        {}
    ]
    return(
        <header>
                <div  className=" hidden lg:block  container">
                    <div className="flex flex-row right-0 left-0 justify-between items-center ">
                        <div>

                            <Image src='logo.svg' className=""  width={200} height={200}/>
                        </div>

                        <div className="flex    flex-row gap-10 items-center font-semibold text-xl text-white">
                            <Link className="bg-[#B3D12F] py-2 px-4" href='#'>Home</Link>
                            <Link href='#'>About Us</Link>
                            <Link href='#'>Project</Link>
                            <Link href='#'>contact</Link>
                        </div>
                    </div>
                </div>
                <div className=" lg:hidden block  container">
                    <div className="flex items-center flex-row justify-between">

                        <Image src='logo.svg' className=""  width={150} height={150}/>
                        <div className="bg-[#B3D12F] p-1">
                            <Menu size={40} className=" text-white "/>
                        </div>
                      
                    </div>

                   
                </div>
        </header>
    )
}