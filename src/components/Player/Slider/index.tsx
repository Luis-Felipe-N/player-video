import { ChangeEvent, useState } from "react"
import { usePlayerVideo } from "../../../hooks/usePlayerVideo"
import { convertSecondInMinute } from "../../../ultis/convertSecondInMinute";
import * as SliderRadiux from '@radix-ui/react-slider';

import style from './style.module.scss'

interface ISliderProps {
    percentage: number;
    currentTime: number;
    onChangePercentage: (event: number) => void
}

export function Slider({ percentage, onChangePercentage }: ISliderProps){
    console.log(percentage)

    function handleChangePercentage(value: number[]) {
        console.log(value)
        onChangePercentage(Number(...value))
    }

    return (
        <SliderRadiux.Root 
            value={[percentage]}
            onValueChange={handleChangePercentage}
            className={style.slider} 
            min={0} 
            max={100} 
            step={0.01} 
            aria-label="Tempo de video"
        >
            <SliderRadiux.Track className={style.slider__track}>
                <SliderRadiux.Range className={style.slider__range} />
            </SliderRadiux.Track>
            <SliderRadiux.Thumb className={style.slider__thumb} />
        </SliderRadiux.Root>
    )
}