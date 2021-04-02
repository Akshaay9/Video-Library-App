import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import PlayListContextFun from './Context/PlaylistContext/PlayListContext';


ReactDOM.render(
  <React.StrictMode>

    <PlayListContextFun>
      {/* {PlayListc context} */}
 

      <App />

      </PlayListContextFun>
  </React.StrictMode>,
  document.getElementById('root')
);

