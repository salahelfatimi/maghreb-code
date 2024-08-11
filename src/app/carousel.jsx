"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Electricite from "/public/carousel/Electricite.png";
import Climatisation from "/public/carousel/Climatisation.png";
import Plomberie from "/public/carousel/Plomberie.png";
import Chauffage from "/public/carousel/Chauffage.png";
import Recharge from "/public/carousel/Recharge.png";
import Locksmith from "/public/carousel/Locksmith.png";
import Vitrerie from "/public/carousel/Vitrerie.png";
import Image from "next/image";

export default function Carousel() {
    const [curr, setCurr] = useState(0);
    const [startPos, setStartPos] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const slider = [
        { 
            id: 1, 
            button: 'Contactez un Électricien', 
            image: Electricite, 
            title: "Dépannage Électrique Rapide", 
            description: 'Pannes électriques et mise aux normes. Service rapide et sécurisé par nos électriciens qualifiés.' 
        },
        { 
            id: 2, 
            button: 'Appeler un Plombier', 
            image: Plomberie, 
            title: "Réparation de Plomberie", 
            description: 'Fuites, toilettes bouchées, et pannes d’eau chaude. Plombiers expérimentés disponibles rapidement.' 
        },
        { 
            id: 3, 
            button: 'Réparation Climatisation', 
            image: Climatisation, 
            title: "Dépannage Climatisation", 
            description: 'Réparations pour climatiseur avec voyants clignotants ou bruit anormal. Experts disponibles pour dépannage rapide.' 
        },
        { 
            id: 4, 
            button: 'Devis Chauffage', 
            image: Chauffage, 
            title: "Installation Chauffage", 
            description: 'Installation et réparation de systèmes de chauffage pour un confort optimal et une efficacité énergétique.' 
        },
        { 
            id: 5, 
            button: 'Installer Borne de Recharge', 
            image: Recharge, 
            title: "Bornes de Recharge", 
            description: 'Installation et réparation de bornes de recharge pour véhicules électriques. Service rapide et fiable.' 
        },
        { 
            id: 6, 
            button: 'Urgence Serrurerie', 
            image: Locksmith, 
            title: "Intervention Serrurerie", 
            description: 'Dépannage rapide en cas de perte de clés ou d’effraction. Interventions 24/7 en 30 minutes.' 
        },
        { 
            id: 7, 
            button: 'Réparation Vitrerie', 
            image: Vitrerie, 
            title: "Dépannage Vitrerie", 
            description: 'Remplacement de verre ou miroirs. Service rapide pour tous vos besoins en vitrerie.' 
        },
    ];
    

    const prev = () => setCurr(curr === 0 ? slider.length - 1 : curr - 1);
    const next = () => setCurr(curr === slider.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        const slideInterval = setInterval(next, 10000);
        return () => clearInterval(slideInterval);
    }, [curr]);

    const handleDragStart = (e) => {
        setStartPos(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
        setIsDragging(true);
    };

    const handleDragEnd = (e) => {
        if (!isDragging) return;
        const endPos = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        if (startPos - endPos > 50) next();
        if (startPos - endPos < -50) prev();
        setIsDragging(false);
    };

    const handleClick = () => {
        document.querySelector('#contactez-nous')?.scrollIntoView({ behavior: 'smooth' });
        
    };

    return (
        <div className="flex items-center justify-center cursor-grab active:cursor-grabbing	 		select-none">
           <div
            className="h-screen overflow-hidden relative"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
        >
                <div style={{ transform: `translateX(-${curr * 100}%)` }} className="flex transition-transform ease-out duration-700">
                    {slider.map((ele, index) => (
                        <Image key={index} src={ele.image} alt={ele.title} className="h-screen min-w-full w-full object-cover object-top" placeholder="blur" title='Service de maintenance' />
                    ))}
                </div>
                <div className="absolute inset-0 justify-center flex">
                    <div className="flex justify-center items-center gap-2">
                       
                        {slider.map((ele, index) => (
                            <div key={index} className={` container text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center flex-col ${curr === index ? "block" : "hidden"}`}>
                                <h2  className="bg-[#ffff] p-2 font-semibold text-lg md:text-2xl text-[#0276FF]">{ele.title}</h2>
                                <p className="font-semibold text-2xl md:text-4xl text-white text-center">{ele.description}</p>
                                <button onClick={()=>(handleClick())} className="bg-[#0276FF] p-4 font-semibold text-2xl text-white hover:border-white hover:bg-white/0 duration-500 border-[#0276FF] border-4">{ele.button}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
