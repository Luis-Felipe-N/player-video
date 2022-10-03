import { FormEvent, memo, useEffect, useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { useClickOutSide } from "../../../../hooks/useClickOutSide";
// import { Us } from "../../../../hooks/useClickOutSide";
import style from './style.module.scss'

interface IButtonVolumeProps {
    onChangeVolume: (value: number) => void;
}

function ButtonVolumeElement({ onChangeVolume }: IButtonVolumeProps) {
    const [ volume, setVolume ] = useState(100)
    const [ showVolumeControls, setShowVolumeControls ] = useState(false)
    const controlsVolumeRef = useRef<HTMLDivElement>(null)
    const { clickOutSide } = useClickOutSide()

    useEffect(() => {
        onChangeVolume(volume)
    }, [volume])

    if (showVolumeControls && controlsVolumeRef.current) {
        clickOutSide(controlsVolumeRef.current, () => {
            setShowVolumeControls(false)
        })
    }



    return (
        <div className={style.containerVolume} ref={controlsVolumeRef}>
            <button
                onClick={() => setShowVolumeControls(!showVolumeControls)}
            >
                <FaVolumeUp size={20} />
            </button>

            <div className={showVolumeControls ? `${style.volume} ${style.showVolumeControls}`: style.volume}>
                <input value={volume} onChange={({target}) => setVolume(Number(target.value))} type="range" min={0} max={1} step={0.1}/>
            </div>
        </div>
    )
}

export const ButtonVolume =  memo(ButtonVolumeElement)