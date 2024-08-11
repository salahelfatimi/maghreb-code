
import Footer from "@/components/footer/footer";
import AboutUs from "@/components/pages/aboutUs";
import Contact from "@/components/pages/contact";
import Homepage from "@/components/pages/homepage";
import Membres from "@/components/pages/members";
import Project from "@/components/pages/project";
import Service from "@/components/pages/service";
import PhoneIcon from "@/components/tools/phoneIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col ">
       <PhoneIcon/>
      <Homepage/>
      {/* <Membres/> */}
      <AboutUs/>
      <Service/>
      <Project/>
     
      <Contact/>
 
    </div>
  );
}
