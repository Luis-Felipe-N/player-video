import { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import style from './style.module.scss'

interface IPlaybackRateProps {
    onChangePlaybackRate: (speed: number) => void;
    currentSpeed: number;
}

const SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

export function PlaybackRate({onChangePlaybackRate, currentSpeed}: IPlaybackRateProps) {
    const [openPlaybackRate, setOpenPlaybackRate] = useState(false)
    return (
        <>
            <div className={style.containerConf}>
                <button 
                    className={style.btnConfig}
                    title="Configurações"
                    aria-label="Configurações"
                    onClick={() => setOpenPlaybackRate(!openPlaybackRate)}
                >
                    <BsFillGearFill />
                </button>

                <div className={openPlaybackRate ? `${style.config} ${style.active}` : style.config}>
                    <strong>Velocidade</strong>
                    <ul>
                        {SPEEDS.map((speed) => (
                            <li>
                                {currentSpeed == speed && <FaCheck />}
                                <button onClick={() => onChangePlaybackRate(speed)}>{speed}</button>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}