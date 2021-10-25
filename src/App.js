import logo from "./logo.svg";
import "./App.css";
import Viewer from "viewerjs";
import { useEffect } from "react";
import "viewerjs/dist/viewer.css";

function App() {
  let viewer;
  useEffect(() => {
    viewer = new Viewer(document.getElementById("image"), {
      inline: true,
      toolbar: false,
      navbar: false,
      fullscreen: false,
      title: false,
      button: false,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header" onClick={() => viewer.show()}>
        <div style={{ width: 500, height: 500 }}>
          <img
            style={{ display: "none" }}
            id="image"
            src="https://scontent-muc2-1.xx.fbcdn.net/v/t1.18169-9/1891201_721728077871576_2076851305_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=K4vqSPzin0YAX_qFqPT&_nc_ht=scontent-muc2-1.xx&oh=17ec5debb604d8a6e2f8ed990a067a3f&oe=619DD933"
            className="App-logo"
            alt="logo"
          />
        </div>
        <div>
          <button onClick={() => viewer.zoom(0.1)}>+</button>
          <button onClick={() => viewer.zoom(-0.1)}>-</button>
          <button onClick={() => viewer.rotate(-90)}>Rotate left</button>
          <button onClick={() => viewer.rotate(90)}>Rotate Right</button>
        </div>
      </header>
    </div>
  );
}

export default App;
