import { useContext, useEffect, useState } from "react"
import { IPlayerVideo } from "../@types/PlayerVideo"
import { playerVideoContext } from "../context/PlayerVideoContext"


interface IUsePlayerVideoProps {

}

export function usePlayerVideo(videoElement: HTMLVideoElement) {
    const { handleTogglePauseVideo, playerState } = useContext(playerVideoContext)

    useEffect(() => {
        if (playerState.isPlaying) {
            videoElement.play()
        } else {
            videoElement.pause()
        }
    }, [playerState.isPlaying, videoElement])

    function togglePlayer() {
        handleTogglePauseVideo()
    }
    
    return (
        togglePlayer
    )
}