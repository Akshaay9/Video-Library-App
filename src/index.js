import React from "react";
import ReactDOM from "react-dom";
import { debugContextDevtool } from "react-context-devtool";
import App from "./App";
import PlayListContextFun from "./Context/PlaylistContext/PlayListContext";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PlayListContextFun>
      {/* {PlayListc context} */}

  

        <App />
    </PlayListContextFun>
  </React.StrictMode>,
  container
);
debugContextDevtool(container);
