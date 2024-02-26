import { useState, useRef} from 'react';
import trailer from '../../../assets/trailer4k.mp4';
import { Volume2, VolumeX } from 'lucide-react';

export function Video(){

    const [isVolume, setIsVolume] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const toggleVolume = () => {
        const video = videoRef.current;
        if(video){
            video.muted = !video.muted;
        }
        setIsVolume(!isVolume); // Alterna entre ligado e desligado
    };


    return(
        <div className="h-[calc(100dvhrem)] relative">
            <video autoPlay muted loop id="Trailer" className='h-[calc(100dvh-5rem)] w-full object-cover' ref={videoRef} >
                <source src={trailer} type='video/mp4'/>
            </video>
            <div className={`absolute flex gap-3 top-12 left-[calc(50%-2rem)] border-2  bg-opacity-80 transition ease-linear duration-300
            p-1 rounded-full text-blue-100 ${isVolume ? 'bg-blue-400 border-blue-400' : 'border-blue-600 bg-blue-800'}`}
            onClick={toggleVolume}>
                <Volume2 className='size-5'/>
                <VolumeX className='size-5'/>
                <div className={`bg-white rounded-full size-5 absolute transition ease-in-out duration-300 ${isVolume ? '' 
                : 'translate-x-[2rem]'}`} />
            </div>
        </div>
    );
}