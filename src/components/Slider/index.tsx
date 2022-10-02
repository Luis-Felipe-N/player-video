import { ChangeEvent, useState } from "react"
import { usePlayerVideo } from "../../hooks/usePlayerVideo"
import { convertSecondInMinute } from "../../ultis/convertSecondInMinute";
import style from './style.module.scss'

interface ISliderProps {
    percentage: number;
    currentTime: number;
    onChangePercentage: (event: number) => void
}

export function Slider({ percentage, currentTime, onChangePercentage }: ISliderProps){



    return (
        <>
            <input 
                max={100}
                min={0}
                className={style.slider}
                type="range"
                value={percentage}
                onChange={({target}) => onChangePercentage(Number(target.value))}
            />

            <span>{convertSecondInMinute(currentTime)}</span>
        </>
    )
}