import {Twitter,Facebook,Instagram,Youtube} from 'lucide-react';

export function Footer(){
    return(
        <div className="h-[30dvh] bg-[#01212f]">
            <div className="flex items-center justify-center pt-16 text-white font-overpass text-2xl tracking-widest">
                "A game for everyone is a game for no one."
            </div>
            <div className="flex items-center justify-between text-neutral-500 font-display text-xl px-10 py-16
            tracking-wider">
                <div>
                    © 2024 Arrowhead Game Studios AB
                    <br/>
                    All Rights Reserved
                </div>
                <div className="flex flex-col gap-2">
                    <a href="mailto:contact@arrowheadgs.com">contact@arrowheadgs.com</a>
                    <ul className="flex gap-4 justify-end items-center">
                        <a href='https://twitter.com/arrowheadgs'><Twitter/></a>
                        <a href='https://www.facebook.com/ArrowheadGS'><Facebook/></a>
                        <a href='https://www.instagram.com/arrowheadgamestudios/'><Instagram/></a>
                        <a href='https://www.youtube.com/user/ArrowheadGameStudios'><Youtube/></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}