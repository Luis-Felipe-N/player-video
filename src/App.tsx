import style from "./style/Player.module.scss"
import { useState } from "react"
import { PlayerVideo } from "./components/Player"


function App() {
  const [source, setSource] = useState('https://artplayer.org/assets/sample/video.mp4')

  return (
    <div className={style.containerPlayer}>
      <PlayerVideo url={source} />
      <input type="text" value={source} onChange={({target})=>setSource(target.value)} />
    </div>
  )
}

export default App
