import { Mail, Phone } from "lucide-react";

export default function Contact(){
    return(
        <div id="contact" className=" flex  py-16 bg-[#B3D12F] items-center justify-center bg-repeat bg-[url('/iconAllService.png')] "
          >
            <div className="container">
                <div className="  bg-[#1e1e1e] flex-col lg:flex-row w-full gap-16 py-16  flex p-8  justify-between items-center ">
                    <div className=" lg:w-1/2  font-bold flex flex-col items-center gap-2 text-white">
                            <span className="text-7xl">we make </span>
                            <span className="text-[#B3D12F] text-6xl" >digital</span>
                            <span className="text-7xl">world</span>
                    </div>
                    <form className="lg:w-1/2 flex flex-col w-full gap-4">
                            <input type="text" name="fullName" id="fullName" placeholder=" full name" className=" placeholder:font-semibold capitalize placeholder:text-white text-white px-4 h-14 rounded   border-[#B3D12F] border-2 bg-[#303030]" />
                            <input type="tel" name="phone" id="phone" placeholder="phone" className="px-4 rounded  capitalize border-[#B3D12F] placeholder:font-semibold placeholder:text-white border-2 bg-[#303030] h-14"/>
                            <select name="purpose" id="purpose" className=" rounded  h-14 px-4 border-[#B3D12F] capitalize border-2 bg-[#303030] font-semibold  text-white text-bold " >
                                <option defaultValue="null" >purpose</option>
                                <option value="create website">create website</option>
                                <option value="create mobile app">create mobile app</option>
                                <option value="create Logo">create Logo</option>
                                <option value="Create figma designee">Create figma designee</option>
                            </select>
                            <button type="submit" className="bg-[#B3D12F] py-4 hover:text-[#B3D12F] hover:bg-[#1e1e1e] border-2 border-[#B3D12F] duration-500 hover: font-bold text-white "> SEND</button>
                        
                    </form>
                </div>
            </div>

        </div>
    )
}