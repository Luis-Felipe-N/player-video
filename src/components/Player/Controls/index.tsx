import { FaPause, FaPlay, FaVolumeUp, FaExpandAlt } from "react-icons/fa";
import { AiOutlineExpand } from "react-icons/ai"
import style from './style.module.scss'
import { convertSecondInMinute } from "../../../ultis/convertSecondInMinute";
import { Slider } from "../Slider";
import { ButtonVolume } from './ButtonVolume'
import { ButtonPlay } from "./ButtonPlay";

interface IControlsProps {
    onTogglePauseVideo: () => void;
    onChangePercentage: (event: number) => void;
    onChangeVolume: (event: number) => void;
    onRequestFullScreen: () => void;
    percentage: number;
    duration: number;
    currentTime: number
    isPlaying: boolean;
}

export function Controls({ isPlaying, duration, currentTime, onChangeVolume, onTogglePauseVideo, onChangePercentage, onRequestFullScreen, percentage }: IControlsProps) {
    
    return (
        <div className={style.controls}>
            <ButtonPlay 
                isPlaying={isPlaying}
                onTogglePauseVideo={onTogglePauseVideo}
            />

            <Slider
                currentTime={currentTime}
                percentage={percentage}
                onChangePercentage={onChangePercentage}
            />

            <span className={style.duration}>
                {convertSecondInMinute(currentTime)} / {convertSecondInMinute(duration)}
            </span>

            <div className={style.options}>
                <ButtonVolume
                    onChangeVolume={onChangeVolume}
                />
                <button onClick={onRequestFullScreen}>
                    <AiOutlineExpand size={20} />
                </button>
            </div>
        </div>
    )
}