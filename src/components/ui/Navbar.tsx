import { useState,useEffect } from "react";
import logo from "../../assets/logo.svg"

export function Navbar(){

    const [isTop, setIsTop] = useState(true);

    useEffect(()=>{
        const onScroll = () =>{
            setIsTop(window.scrollY < 10);
        }

        window.addEventListener('scroll',onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[]);


    return(
        <div className={`h-20 sticky top-0 transition z-50 duration-300 ease-in ${isTop ? 'bg-transparent' : 'bg-[#01212f]'}`}>
            <div className="flex h-full justify-between items-center mx-10">
               <a href="https://www.arrowheadgamestudios.com">
                    <img src={logo} alt="ARROWHEAD" className="w-64"/>
               </a>
               <div className="mx-10">
                    <ul className="flex text-white font-semibold font-overpass tracking-widest gap-12 text-lg z-50">
                        <a className="hover:cursor-pointer hover:text-blue-500 transition duration-200 ease-out">
                            ENLIST
                        </a>
                        <a href="https://www.arrowheadgamestudios.com/blog/" 
                        className="hover:cursor-pointer hover:text-blue-500 transition duration-200 ease-out">
                            BLOG
                        </a>
                        <a href="https://jobs.arrowheadgamestudios.com" 
                        className="hover:cursor-pointer hover:text-blue-500 transition duration-200 ease-out">
                            JOBS
                        </a>
                        <a href="https://arrowhead.zendesk.com/hc/en-us" 
                        className="hover:cursor-pointer hover:text-blue-500 transition duration-200 ease-out">
                            SUPPORT
                        </a>
                    </ul>
               </div>
            </div>
        </div>
    );
}