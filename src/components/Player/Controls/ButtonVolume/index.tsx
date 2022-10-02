import { FormEvent, memo } from "react";
import { FaVolumeUp } from "react-icons/fa";
import style from './style.module.scss'

interface IButtonVolumeProps {
    onChangeVolume: (value: number) => void;
}

function ButtonVolumeElement({ onChangeVolume }: IButtonVolumeProps) {

    function handleChangeVolume(target: any) {
        onChangeVolume(Number(target.value))
    }

    return (
        <div className={style.containerVolume}>
            <button>
                <FaVolumeUp size={20} />
            </button>

            <div className={style.volume}>
                <input onInput={(event) => handleChangeVolume(event.target)} type="range" />
            </div>
        </div>
    )
}

export const ButtonVolume =  memo(ButtonVolumeElement)