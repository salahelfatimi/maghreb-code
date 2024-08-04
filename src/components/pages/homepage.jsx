export default function Homepage(){
    return(
       
        <div className=" flex flex-col justify-center  gap-14  ">
            <div className="flex flex-col justify-center items-center  gap-6 ">
            <h1 className=" text-center font-bold text-3xl lg:text-5xl text-white">Hey , it&apos;s time to  <span className=" bg-[#B3D12F] py-2 px-4">digital</span>  world  </h1>
            <button className=" bg-white border-[#B3D12F] border-4 lg:px-8 px-4 py-2  font-semibold text-2xl rounded-full text-[#B3D12F]">Make it</button>
            </div>
            <div className="flex lg:flex-row flex-col px-2  justify-between items-center  gap-2 lg:gap-0">
                <p className="bg-[#B3D12F]    uppercase lg:w-full  lg:py-52 text-lg font-semibold text-white border-4  w-full h-16 flex items-center justify-center">create mobile app</p>
                <p className="bg-[#fff]     uppercase lg:w-full  lg:py-28 text-lg font-semibold text-[#B3D12F]  border-4 border-[#B3D12F]  w-full h-16 flex items-center justify-center">create website</p>
                <p className="bg-[#B3D12F]     uppercase lg:w-full  lg:py-16 text-lg font-semibold text-white border-4  w-full h-16 flex items-center justify-center">create Logo </p>
                <p className="bg-[#fff]     uppercase lg:w-full  lg:py-28 text-lg font-semibold text-[#B3D12F]  border-4 border-[#B3D12F]  w-full h-16 flex items-center justify-center">web Marketing</p>
                <p className="bg-[#B3D12F]     uppercase lg:w-full  lg:py-52 text-lg font-semibold text-white border-4 w-full h-16 flex items-center justify-center">Create figma designee</p>
            </div>
        
        </div>
      
    )
}