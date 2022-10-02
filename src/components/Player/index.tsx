import { forwardRef, ReactNode, useEffect, useRef } from "react";
import { usePlayerVideo } from "../../hooks/usePlayerVideo";
import { Controls } from "../Controls";
import { PlaybackRate } from "./PlaybackRate";
import style from './style.module.scss'

interface IPlayerVideoProps {
    url: string
}


export function PlayerVideo({ url }: IPlayerVideoProps) {
    const videoPlayerRef = useRef<HTMLVideoElement>(null)

    const { isPlaying, percentage, speed, handleTogglePauseVideo, handleTimeUpdate, handleChangePercentage, handlechangeSpeed } = usePlayerVideo(videoPlayerRef.current)

    console.log('rederizando player')

    return (
        <div className={style.player}>  
            <video
                ref={videoPlayerRef}
                className={style.videoPlayer}
                onClick={handleTogglePauseVideo}
                onTimeUpdate={handleTimeUpdate}
                >
                    <source src={url}  />
            </video>

            <div className={style.containerControls}>
                <PlaybackRate currentSpeed={speed} onChangePlaybackRate={handlechangeSpeed} />
                <Controls 
                    onTogglePauseVideo={handleTogglePauseVideo}
                    onChangePercentage={handleChangePercentage}
                    isPlaying={isPlaying}
                    percentage={percentage}
                    duration={videoPlayerRef.current?.duration || 0}
                    currentTime={videoPlayerRef.current?.currentTime || 0}
                />
            </div>
        </div>
    )
}