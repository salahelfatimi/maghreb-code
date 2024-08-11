import Image from "next/image"
import website from "/public/service/website.jpg";
import logo from "/public/service/logo.png";
import seo from "/public/service/seo.jpg";
import maintenance from "/public/service/maintenance.jpg";
export default function Service(){
    const service = [
        {
            title: 'Custom Website Development',
            image: website
        },
        {
            title: 'Logo & Branding Design',
            image: logo
        },
        {
            title: 'Web Marketing & SEO',
            image: seo
        },
        {
            title: 'Technical Support & Maintenance',
            image: maintenance 
        }
    ];
    
    return(
        <div id="Services" className="bg-[#1E1E1E] py-12 select-none">
            <div className=" container flex flex-col gap-8">
                <h2 className="font-bold text-3xl xl:text-6xl text-[#B3D12F] text-center"><span className=" text-white">Our</span> services</h2>
                <div className=" grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8  justify-center">
                    {
                        service.map((ele,index)=>(
                            <div key={index} className=" bg-white relative  shadow-2xl  flex flex-col justify-between  gap-6 h-full  ">
                                <Image 
                                src={ele.image} 
                                placeholder="blur"
                                quality={50}
                                title={ele.title}
                                className=" object-cover w-full   h-[300px] "
                                alt={ele.title}
                                />
                                <div className=" bg-black/60  inset-0 absolute"></div>
                                <div className=" absolute inset-0 justify-center flex flex-col items-center gap-6 text-center p-4 ">
                                    <h3 className=" text-[#fff] font-bold text-3xl ">{ele.title}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </div>
    )
}