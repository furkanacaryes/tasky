import "./global-styles.css";
import { Draggable } from "./lib";

function App() {
  return (
    <Draggable>
      <div style={{backgroundColor: 'blue', width: 32, height: 32 }} />
    </Draggable>
  )
}

export default App;
