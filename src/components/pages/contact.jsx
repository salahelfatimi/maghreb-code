"use client";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Contact(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        purpose: ""
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        
        setValidation(true);

        if (
        formData.fullName &&
        formData.phone &&
        formData.purpose 
        ) {
        setIsLoading(true);
        const loadingToast = toast.loading("Sending ...");
        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });
            if (response.status === 200) {
            setFormData({
                fullName: "",
                phone: "",
                purpose: "",
            });
            setValidation(false);
            setIsLoading(false);
            toast.dismiss(loadingToast);
            toast.success("Message was sent successfully!");
            }
        } catch {
            toast.dismiss(loadingToast);
            setIsLoading(false);
            toast.error("Failed to Send Email.");
        }
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    return(
        <div id="contact" className=" flex flex-col gap-12  py-16  items-center justify-center bg-cover bg-blend-screen  bg-[url('/bgbuttom.png')] "
          
          >
            <h2 className="font-bold text-3xl xl:text-6xl text-[#B3D12F] text-center"> <span className=" text-white">Contact</span> US</h2>
            <Toaster
                toastOptions={{
                    className: " bg-[#1e1e1e] text-[#B3D12F]",
                }}
            />
            <div className="container ">
                <div className="  bg-[#1e1e1e] shadow-inner   bg-cover   bg-[url('/right.png')]  rounded-xl flex-col lg:flex-row w-full gap-16 py-16  flex p-8  justify-between items-center ">
                    <div className=" lg:w-1/2  font-bold flex flex-col items-center gap-2 text-white">
                            <Image src={'/contact/logo.png'} width={400} height={400} />
                    </div>
                    <form onSubmit={sendEmail} className="lg:w-1/2 flex flex-col w-full gap-4">
                        <div className=" flex flex-col gap-2 w-full">
                            <input   value={formData.fullName} onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder=" full name"  className={`${!formData.fullName && validation && "border-red-500 "}  placeholder:font-semibold capitalize placeholder:text-white text-white px-4 h-14 rounded   border-[#B3D12F] border-2 bg-[#303030]`}  />
                            <p className="text-red-500 text-xs font-medium">{!formData.fullName &&validation &&"Please enter your FullName"}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.phone} onChange={handleInputChange} type="tel" name="phone" id="phone" placeholder="phone" className={`${!formData.phone && validation && "border-red-500 "}  placeholder:font-semibold capitalize placeholder:text-white text-white px-4 h-14 rounded   border-[#B3D12F] border-2 bg-[#303030]`}/>
                            <p className="text-red-500 text-xs font-medium">{!formData.phone &&validation &&"Please enter your Phone"}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <select value={formData.purpose} onChange={handleInputChange}  name="purpose" id="purpose" className={`${!formData.purpose && validation && "border-red-500 "}  rounded  h-14 px-4 border-[#B3D12F] capitalize border-2 bg-[#303030] font-semibold  text-white text-bold`}  >
                                <option defaultValue="" value={''} >purpose</option>
                                <option value="create website">create website</option>
                                <option value="create mobile app">create mobile app</option>
                                <option value="create Logo">create Logo</option>
                                <option value="Create figma designee">Create figma designee</option>
                            </select>
                            <p className="text-red-500 text-xs font-medium">{!formData.purpose &&validation &&"Select  your purpose"}</p>
                        </div>
                          
                            <button type="submit" className="bg-[#B3D12F] py-4 hover:text-[#B3D12F] hover:bg-[#1e1e1e] border-2 border-[#B3D12F] duration-500 hover: font-bold text-white "> {isLoading ? "sending..." : 'SEND'} </button>
                        
                    </form>
                </div>
            </div>

        </div>
    )
}