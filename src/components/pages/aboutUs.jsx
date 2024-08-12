import Image from "next/image";
import bg from '/public/aboutUs/bg1.png'
export default function AboutUs(){
    return(
        <div id="aboutUs" className="bg-[#B3D12F] z-20 py-14  flex flex-col items-center justify-center gap-8">
          
            <div className=" p-8 container   flex flex-col xl:flex-row justify-between gap-16  items-center">
                <Image 
                src={bg} 
                width={1000}
                height={1000}
                quality={100}
                placeholder="blur"
                title={"Maghreb Code"}
                
                className=" bg-cover lg:w-1/2 rounded  "
                alt="Maghreb Code"/>
                <div className=" flex gap-4 flex-col  ">
                    <h2 className="bg-[#fff] text-[#B3D12F] text-center  p-2 font-bold text-3xl lg:text-7xl  capitalize">About Us</h2>
                    <p className="  text-white  lg:text-2xl text-xl  text-center lg:text-left    ">At Maghreb Code, we&apos;re a dedicated team of digital experts based in Marrakech, Morocco. Founded by  passionate OFPPT student, our journey began with a rich background in web development, logo creation, and web marketing. <br/> <br/> As a study group at OFPPT, we honed our skills through various freelance projects, consistently delivering high-quality websites and innovative solutions.</p>
                    <p className="  bg-white  text-[#B3D12F] lg:text-2xl text-xl  text-center lg:text-left   p-2 ">  In 2024, we established Maghreb Code Company to expand our reach and continue offering exceptional digital services.</p>
                </div>

        
            </div>
        </div>
    )
}