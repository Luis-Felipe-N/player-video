import {  useContext, useEffect } from "react"
import { playerVideoContext } from "../context/PlayerVideoContext"



export function usePlayerVideo(videoElement: HTMLVideoElement | null) {
    const { 
        playerState: { isPlaying, percentage, speed, isFullScreen },
        handleTogglePauseVideo, 
        handleUpdatePercentage, 
        handleUpdateSpeed, 
        handleSetFullScreen
    } = useContext(playerVideoContext)

    useEffect(() => {
        if (videoElement) {
            isPlaying ? videoElement.play() : videoElement.pause()
        }
    }, [isPlaying, videoElement])

    useEffect(() => {
        if (videoElement) {
            videoElement.playbackRate = speed
        }
    }, [videoElement, speed])

    function handleTimeUpdate() {
        if (videoElement) {
            const currentPercentage = (videoElement.currentTime / videoElement.duration) * 100
            handleUpdatePercentage(currentPercentage)
        }
    }

    function handleChangePercentage(value: number) {
        if (videoElement) {
            const newDuration = videoElement.duration / 100 * value 
            videoElement.currentTime = newDuration
        }
    }

    function handlechangeSpeed(value: number) {
        handleUpdateSpeed(value)
    }

    return {
        isPlaying,
        percentage,
        speed,
        isFullScreen,
        handleTogglePauseVideo,
        handleTimeUpdate,
        handleChangePercentage,
        handlechangeSpeed,
        handleRequestFullScreen: handleSetFullScreen
    }
}