import { useCallback, useRef } from "react";
import { Controls } from "./Controls";
import { usePlayerVideo } from "../../hooks/usePlayerVideo";
import { PlaybackRate } from "./PlaybackRate";
import screenfull from "../../ultis/screenFull";
import { isMobile } from "../../ultis/checkDevice";
import style from './style.module.scss'

interface IPlayerVideoProps {
    url: string
}


export function PlayerVideo({ url }: IPlayerVideoProps) {
    const videoPlayerRef = useRef<HTMLVideoElement>(null)
    const containerVideoPlayerRef = useRef<HTMLDivElement>(null)
    const controlsRef = useRef<HTMLDivElement>(null)

    const { isPlaying, isFullScreen, percentage, speed, handleTogglePauseVideo, handleTimeUpdate, handleChangePercentage, handlechangeSpeed, handleSetFullScreen } = usePlayerVideo(videoPlayerRef.current)

    const handleToggleFullscreen = useCallback(() => {
        if (!screenfull.isEnabled) return;

    
        if (!isFullScreen) {
          // @ts-ignore
          screenfull.request(containerVideoPlayerRef.current).then(() => {
            if (!isMobile) return;
    
            screen.orientation.lock('landscape');
          });
          handleSetFullScreen(true);
        } else {
          screenfull.exit().then(() => {
            if (!isMobile) return;
    
            screen.orientation.lock('portrait');
          });
          handleSetFullScreen(false);
        }
      }, [isFullScreen]);

    return (
        <div ref={containerVideoPlayerRef} className={style.player} onDoubleClick={handleToggleFullscreen}>  
            <video
                ref={videoPlayerRef}
                className={style.videoPlayer}
                onClick={handleTogglePauseVideo}
                onTimeUpdate={handleTimeUpdate}
                >
                    <source src={url}  />
            </video>
  
            <div className={style.containerControls} ref={controlsRef}>
                <PlaybackRate currentSpeed={speed} onChangePlaybackRate={handlechangeSpeed} />
                <Controls 
                    onRequestFullScreen={handleToggleFullscreen}
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