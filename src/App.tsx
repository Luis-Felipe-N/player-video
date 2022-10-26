import style from "./style/Player.module.scss"
import { useState } from "react"
import { PlayerVideo } from "./components/Player"
import video from '../public/video.mp4'

function App() {

  return (
    <div className={style.containerPlayer}>
      <PlayerVideo url={video} />
    </div>
  )
}

export default App
