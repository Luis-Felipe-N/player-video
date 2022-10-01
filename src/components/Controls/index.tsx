import { usePlayerVideo } from "../../hooks/usePlayerVideo"
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import style from './style.module.scss'
import { Slider } from "../Slider";
import { ChangeEvent } from "react";
import { convertSecondInMinute } from "../../ultis/convertSecondInMinute";

interface IControlsProps {
    onTogglePauseVideo: () => void;
    onChangePercentage: (event: number) => void
    percentage: number;
    duration: number;
    currentTime: number
    isPlaying: boolean;
}

export function Controls({ isPlaying, duration,currentTime, onTogglePauseVideo, onChangePercentage, percentage }: IControlsProps) {
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
                duration={duration || 0}
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
            </div>
        </div>
    )
}