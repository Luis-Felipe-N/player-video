import { memo } from "react";
import { FaVolumeUp } from "react-icons/fa";
import style from './style.module.scss'


function ButtonVolumeElement() {
    return (
        <div className={style.containerVolume}>
            <button>
                <FaVolumeUp size={20} />
            </button>

            <div className={style.volume}>
                <input type="range" />
            </div>
        </div>
    )
}

export const ButtonVolume =  memo(ButtonVolumeElement)