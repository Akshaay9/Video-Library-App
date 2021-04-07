import React from "react";
import ReactDOM from "react-dom";
import { debugContextDevtool } from "react-context-devtool";
import App from "./App";
import PlayListContextFun from "./Context/PlaylistContext/PlayListContext";
import { LikedVideoContextFun } from "./Context/LikedVideoContext/LikedVideoContext";
import { WatchLaterVideoContextFun } from "./Context/WatchLaterVideoContext/WatchLaterVideoContext";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    
    <PlayListContextFun>
      {/* {PlayListc context} */}

      <LikedVideoContextFun>
        {/* Liked video Context */}

        <WatchLaterVideoContextFun>
          {/* Watch Later context */}

          <App />
        </WatchLaterVideoContextFun>
      </LikedVideoContextFun>
    </PlayListContextFun>
  </React.StrictMode>,
  container
);
debugContextDevtool(container);
