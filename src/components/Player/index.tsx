import { useCallback, useRef, useState } from "react";
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
    const [showControls, setShowControls] = useState(false)

    const videoPlayerRef = useRef<HTMLVideoElement>(null)
    const containerVideoPlayerRef = useRef<HTMLDivElement>(null)

    const { 
      isPlaying, 
      isFullScreen, 
      percentage, 
      speed, 
      handleTogglePauseVideo, 
      handleChangePercentage, 
      handlechangeSpeed, 
      handleSetFullScreen, 
      handleTimeUpdate,
      handleChangeVolume
    } = usePlayerVideo(videoPlayerRef.current)

    let hiddenControlsSetInterval: number | undefined

    const handleToggleFullscreen = useCallback(() => {
        if (!screenfull.isEnabled) return;

        if (!isFullScreen) {
          // @ts-ignore
          screenfull.request(containerVideoPlayerRef.current).then(() => {
            console.log(isMobile())
            if (!isMobile()) return;
    
            screen.orientation.lock('landscape');
          });
          handleSetFullScreen(true);
        } else {
          screenfull.exit().then(() => {
            if (!isMobile()) return;
    
            screen.orientation.lock('portrait');
          });
          handleSetFullScreen(false);
        }
    }, [isFullScreen]);

    const handleShowControls = useCallback(() => {
      clearTimeout(hiddenControlsSetInterval)
      setShowControls(true)

      handleHiddenControls()
    }, [])

    const handleHiddenControls = useCallback(() => {
      hiddenControlsSetInterval = setTimeout(() => {
        setShowControls(false)
      }, 4000) // 2s
    }, [])

    return (
        <div 
          ref={containerVideoPlayerRef} 
          className={style.player} 
          onDoubleClick={handleToggleFullscreen}
          onMouseEnter={handleShowControls}
          onMouseOut={handleHiddenControls}
          onMouseMove={handleShowControls}
        >  
            <video
                ref={videoPlayerRef}
                className={style.videoPlayer}
                onClick={handleTogglePauseVideo}
                onTimeUpdate={handleTimeUpdate}
                >
                    <source src={url}  />
            </video>
  
            <div className={showControls ? `${style.containerControls} ${style.showControls}` : style.containerControls} >
                <PlaybackRate currentSpeed={speed} onChangePlaybackRate={handlechangeSpeed} />
                <Controls 
                    onChangeVolume={handleChangeVolume}
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