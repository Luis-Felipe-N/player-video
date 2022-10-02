import { FaPause, FaPlay, FaVolumeUp, FaExpandAlt } from "react-icons/fa";
import { AiOutlineExpand } from "react-icons/ai"
import style from './style.module.scss'
import { convertSecondInMinute } from "../../../ultis/convertSecondInMinute";
import { Slider } from "../Slider";

interface IControlsProps {
    onTogglePauseVideo: () => void;
    onChangePercentage: (event: number) => void;
    onRequestFullScreen: () => void;
    percentage: number;
    duration: number;
    currentTime: number
    isPlaying: boolean;
}

export function Controls({ isPlaying, duration, currentTime, onTogglePauseVideo, onChangePercentage, onRequestFullScreen, percentage }: IControlsProps) {
    return (
        <div className={style.controls}>
            <button 
                onClick={onTogglePauseVideo}
                className={style.btnPause}
            >
                { isPlaying ? (
                    <FaPause size={20} />
                    ) : (
                    <FaPlay size={20} />
                )}
            </button>

            <Slider
                currentTime={currentTime}
                percentage={percentage}
                onChangePercentage={onChangePercentage}
            />

            <span className={style.duration}>
                {convertSecondInMinute(currentTime)} / {convertSecondInMinute(duration)}
            </span>

            <div className={style.options}>
                <button>
                    <FaVolumeUp size={20} />
                </button>
                <button onClick={onRequestFullScreen}>
                    <AiOutlineExpand size={20} />
                </button>
            </div>
        </div>
    )
}