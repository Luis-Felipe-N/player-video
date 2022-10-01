import {  useContext, useEffect } from "react"
import { IPlayerVideo } from "../@types/PlayerVideo"
import { playerVideoContext } from "../context/PlayerVideoContext"



export function usePlayerVideo(videoElement: HTMLVideoElement | null) {
    const {handleTogglePauseVideo, handleUpdatePercentage,  playerState: { isPlaying, percentage }} = useContext(playerVideoContext)

    useEffect(() => {
        if (videoElement) {
            isPlaying ? videoElement.play() : videoElement.pause()
        }
    }, [isPlaying, videoElement])

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

    return {
        isPlaying,
        percentage,
        handleTogglePauseVideo,
        handleTimeUpdate,
        handleChangePercentage
    }
}