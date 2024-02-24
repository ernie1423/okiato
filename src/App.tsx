import { Stage, Sprite } from "@pixi/react";
import "./App.css"
import CircleSVG from "./assets/circle.svg"

const App = () => {
  return <Stage
    width={window.innerWidth}
    height={window.innerHeight}
  >
    <Sprite
      image={CircleSVG}
      x={window.innerWidth/2}
      y={window.innerHeight/2}
      anchor={{ x: 0.5, y: 0.5 }}
    />
  </Stage>;
};

export default App;
