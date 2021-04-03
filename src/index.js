import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PlayListContextFun from "./Context/PlaylistContext/PlayListContext";
import RoutingContextFunction from "./Context/RouteContext/RotingContextProvider";

ReactDOM.render(
  <React.StrictMode>
    
    <RoutingContextFunction>
      {/* {Routing Context} */}

      <PlayListContextFun>
        {/* {PlayListc context} */}
        

        <App />
      </PlayListContextFun>
    </RoutingContextFunction>
  </React.StrictMode>,
  document.getElementById("root")
);
