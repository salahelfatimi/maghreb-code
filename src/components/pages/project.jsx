import { Link2, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Project(){
    const project=[
        {id:2,link:'https://ecotech-depannage.vercel.app/',code:['Nextjs','TailwindCSS','Figma'],name:'Ecotech Depannage',description:"EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide.",image:'/project/ecotech-depannage.png',height:909,width:1920},
        {id:1,link:'https://explorem.net/en',code:['Nextjs','TailwindCSS','Figma','Prisma','MongoDB'],name:'Explorem SARL',description:'Explorem is a team of experts providing services in human resources, language training, nursing formation, and coaching on recruitment, management, and training, both in Morocco and abroad.',image:'/project/explorem.png',height:909,width:1920}

    ]
    return(
        <div id="Our-Project" className="  flex flex-col gap-16 py-14  bg-cover bg-blend-screen  bg-[url('/right.png')]">
            <h2 className="  text-3xl lg:text-6xl text-center text-white font-semibold">Some Things We&apos;ve <span className=" text-[#B3D12F]">Built</span></h2>
            {
                project.map((ele,index)=>(
                    <div key={index} className="container flex flex-col-reverse even:lg:flex-row odd:lg:flex-row-reverse items-center justify-between gap-6 bg-[#1E1E1E] rounded p-4">
                        <div className=" lg:w-1/2 flex flex-col items-center gap-8 ">
                            <h3 className=" text-2xl lg:text-4xl text-white font-semibold bg-[#B3D12F]  w-fit p-3">{ele.name}</h3>
                            <div className="text-white font-medium text-center lg:text-xl w-fit p-2 ">
                                <span >{ele.description}</span>
                            </div>
                           
                            <ul className=" grid grid-cols-2 lg:grid-cols-3 text-center gap-4">
                                {
                                    ele.code.map((ele,index)=>(
                                        <li key={index} className="  p-2 text-white  border-[#B3D12F] border-2 font-semibold">{ele}</li>  
                                    ))
                                }
                                
                            </ul>
                        </div>
                        <div className=" relative lg:w-1/2">
                            <Link href={ele.link} target="_blank" className="group  absolute flex items-center justify-center duration-500 cursor-pointer hover:bg-gray-900/70 rounded inset-0"><SquareArrowOutUpRight size={40} className=" text-white stroke-2 group-hover:block hidden  " /></Link>
                            <Image className=" rounded" src={ele.image} width={ele.width} height={ele.height}/>
                        </div>
                    </div>
                ))
            }
           
        
        </div>
    )
}