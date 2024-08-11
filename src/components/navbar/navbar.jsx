'use client'
import { MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("#accueil");

    const itemNav = useMemo(() => [
        { title: 'Home', href: '#home' },
        { title: 'About US', href: '#aboutUs' },
        { title: 'Our Services', href: '#Services' },
        { title: 'Our Project', href: '#Our-Project' },
        { title: 'Contact', href: '#contact' }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2; 
            itemNav.forEach(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollY > sectionTop && scrollY < sectionTop + section.offsetHeight ) {
                        setActiveSection(item.href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [itemNav]);

    // Smooth scroll to section
    const handleClick = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      
    };

    
    return (
        <div className=" pb-40">
            <div className="fixed z-30 right-0 left-0">
                <div className="bg-[#B3D12F] p-4">
                    <div className="container flex flex-row justify-between">
                        <span className="font-semibold text-white animate-pulse uppercase">Coding Time</span>
                        <div className="flex gap-6 justify-between">
                            <Link href={'https://maps.app.goo.gl/gtaWxSsq7yA2k8fk9'} className="flex gap-2 font-semibold text-white items-center"><MapPin size={25} /><span className="lg:block hidden " >Morocco , Marrakech</span></Link>
                            <Link href={'tel:+212644001490'} className="flex gap-2 font-semibold text-white items-center"><Phone size={25} /><span className="lg:block hidden " >+212 644 001 490</span></Link>
                        </div>
                    </div>
                </div>
                <div className=" py-4 bg-[#303030] ">
                    <div className="container flex justify-between items-center">
                        <Link href={'/'} className=" flex gap-4 items-center justify-center"><Image src={'/logo.svg'} width={80} height={80} priority alt="Services Reparation" /> <h1 className="flex flex-col font-semibold text-2xl text-white">Maghreb  <strong className="text-[#B3D12F] ">Code</strong></h1></Link>
                        <div className="bg-[#B3D12F] p-1  xl:hidden block ">
                            <Menu size={40} onClick={() => { setOpen(!open) }} className="stroke-white cursor-pointer hover:rotate-180 duration-700" />
                        </div>
                        <div className=" xl:block hidden">
                            <ul className="flex gap-10 items-center ">
                                {itemNav.map((ele, index) => (
                                    <li key={index} className={`font-medium  text-lg text-white ${activeSection === ele.href ? 'bg-[#B3D12F]  text-white p-2' : ''}`}>
                                        <button onClick={() => handleClick(ele.href)}>{ele.title}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       
                        <div className={`fixed z-30 inset-0 bg-cover bg-top  bg-[url('/bgtop.png')]  flex items-center justify-center bg-[#303030] duration-700 transition ${open == false ? "translate-x-0" : "translate-x-full"}`}>
                            <button onClick={() => { setOpen(true) }} className="absolute top-4 right-4 bg-[#B3D12F] rounded-full p-2 text-white">
                                <X size={40}  />
                            </button>
                            <div className="flex flex-col items-center gap-12 text-2xl font-bold">
                                {itemNav.map((ele, index) => (
                                    <button key={index}  className={` text-xl hover:duration-700 transition font-semibold text-white ${activeSection === ele.href ? 'bg-[#B3D12F]  text-white p-2' : 'hover:text-[#B3D12F] text-white'}`} onClick={() => {handleClick(ele.href), setOpen(!open)}}>
                                        {ele.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
