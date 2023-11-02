import "./App.scss";
import { FileBackendProvider } from "./FileBackendProvider";

import { WebIDE, WebIDEStateProvider } from "web-ide";
import "web-ide/style.css";

function App() {
  return (
    <div className="App" id="app">
      <WebIDEStateProvider>
        <FileBackendProvider>
          <WebIDE />
        </FileBackendProvider>
      </WebIDEStateProvider>
    </div>
  );
}

export default App;
