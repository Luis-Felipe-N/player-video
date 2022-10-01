import { forwardRef, ReactNode, useEffect, useRef } from "react";
import { usePlayerVideo } from "../../hooks/usePlayerVideo";
import { Controls } from "../Controls";
import style from './style.module.scss'

interface IPlayerVideoProps {
    url: string
}


export function PlayerVideo({ url }: IPlayerVideoProps) {
    const videoPlayerRef = useRef<HTMLVideoElement>(null)

    const { isPlaying, percentage, handleTogglePauseVideo, handleTimeUpdate, handleChangePercentage } = usePlayerVideo(videoPlayerRef.current)

    return (
        <div className={style.player}>  
            <video
                ref={videoPlayerRef}
                className={style.videoPlayer}
                onClick={() => {
                    console.log('click')
                    handleTogglePauseVideo()
                }}
                onTimeUpdate={() => {
                    handleTimeUpdate()
                }}
                >
                    <source src={url}  />
            </video>

            <div className={style.containerControls}>
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