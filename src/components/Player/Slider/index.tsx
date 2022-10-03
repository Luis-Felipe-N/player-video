import { ChangeEvent, useState } from "react"
import { usePlayerVideo } from "../../../hooks/usePlayerVideo"
import { convertSecondInMinute } from "../../../ultis/convertSecondInMinute";
import style from './style.module.scss'

interface ISliderProps {
    percentage: number;
    currentTime: number;
    onChangePercentage: (event: number) => void
}

export function Slider({ percentage, onChangePercentage }: ISliderProps){

    function handleChangePercentage(target: any) {
        onChangePercentage(Number(target.value))
    }

    return (
        <div className={style.containerSlider}>
            <input 
                max={100}
                min={0}
                className={style.slider}
                type="range"
                value={percentage}
                onInput={({target}) => handleChangePercentage(target)}
            />

            {/* <span style={{left: `${percentage}%`}} className={style.currentTime}>{convertSecondInMinute(currentTime)}</span> */}
        </div>
    )
}