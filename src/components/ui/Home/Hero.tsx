import helldivers from '../../../assets/helldivers2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSteam, faPlaystation} from '@fortawesome/free-brands-svg-icons'

export function Hero(){
    return(
        <div className="-mt-20 h-[100dvh]">
            <div className="h-full bg-neutral-800 bg-hero-pattern bg-cover bg-center select-none">
                <div className='absolute top-32 left-[calc(50%-20.5rem)] flex-col text-center'>
                    <div className='font-medium font-russo text-white text-5xl tracking-wide text-shadow pr-9'>
                        FOR
                    </div>
                    <div className='font-medium font-russo text-border-size-0 text-white text-[7rem] tracking-wide'>
                        DEMOCRACY
                    </div>
                </div>
                <img className="absolute w-auto bottom-48 left-[calc(50%-240px)]" src={helldivers}/>
                <div className='absolute bottom-[calc(50%-5rem)] right-5 text-2xl font-display font-medium tracking-wide h-36 flex flex-row items-center 
                gap-5'>
                    <div className='font-russo text-black font-normal text-xl tracking-wider'>
                        PLAY
                    </div>
                    <ul className='flex-col flex gap-8 border-l-2 border-dotted border-black h-28'>
                        <a href="https://store.steampowered.com/app/553850/HELLDIVERS_2/" className='pl-2 pt-3'>
                            <FontAwesomeIcon icon={faSteam} className='size-7'/>
                        </a>
                        <a href="https://www.playstation.com/games/helldivers-2/" className='pl-2'>
                        <FontAwesomeIcon icon={faPlaystation} className='size-7'/>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}