import { createContext, ReactNode, useState } from "react";
import { IPlayerVideo } from "../@types/PlayerVideo";

interface IplayerVideoContext {
    playerState: IPlayerVideo,
    handleTogglePauseVideo: () => void;
}

interface IPlayerVideoProvider {
    children: ReactNode
}

export const playerVideoContext = createContext({} as IplayerVideoContext)

export function PlayerVideoProvider({ children }: IPlayerVideoProvider) {
    const [playerState, setPlayerState] = useState<IPlayerVideo>({
        percentage: 0,
        durationTime: 0,
        speed: 1,
        isPlaying: false,
        isMuted: false,
    })

    function handleTogglePauseVideo() {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying
        })
    }

    return (
        <playerVideoContext.Provider value={{playerState, handleTogglePauseVideo}}>
            {children}
        </playerVideoContext.Provider>
    )
}