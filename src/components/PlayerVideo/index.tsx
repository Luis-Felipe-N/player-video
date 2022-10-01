import { useEffect, useRef } from "react";
import { FaPause } from "react-icons/fa";
import { usePlayerVideo } from "../../hooks/usePlayerVideo";
import style from './style.module.scss'

interface IPlayerVideoProps {
    url: string
}

export function PlayerVideo({ url }: IPlayerVideoProps) {
    const videoPlayerRef = useRef<HTMLVideoElement>(null)
    
    useEffect(() => {
        if (videoPlayerRef.current) {
            const { toggle } = usePlayerVideo(videoPlayerRef.current)
        }
    }, [videoPlayerRef.current])

    return (
        <div className={style.player}>
            <video
                ref={videoPlayerRef}
            >
                <source src={url} type="" />
            </video>

            <div className={style.controls}>
                <button 
                    onClick={handleTogglePauseVideo}
                    className={style.btnPause}>
                    <FaPause size={20} />
                </button>

                <input type="range" />
            </div>
        </div>
    )
}