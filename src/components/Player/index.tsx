import { forwardRef, MouseEvent, ReactNode, useEffect, useRef } from "react";
import { usePlayerVideo } from "../../hooks/usePlayerVideo";
import { Controls } from "./Controls";
import { PlaybackRate } from "./PlaybackRate";
import style from './style.module.scss'

interface IPlayerVideoProps {
    url: string
}


export function PlayerVideo({ url }: IPlayerVideoProps) {
    const videoPlayerRef = useRef<HTMLVideoElement>(null)

    const { isPlaying, isFullScreen, percentage, speed, handleTogglePauseVideo, handleTimeUpdate, handleChangePercentage, handlechangeSpeed, handleRequestFullScreen } = usePlayerVideo(videoPlayerRef.current)

    function handleToggleFullScreen(html: any) {
        html.requestFullscreen()
    }

    return (
        <div className={isFullScreen ? `${style.player} ${style.playerFullscreen}` : style.player}>  
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
                    onRequestFullScreen={handleRequestFullScreen}
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