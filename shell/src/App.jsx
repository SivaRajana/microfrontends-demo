import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import MFE1 from "mfe1/mfe1"
import Header from "mfe1/header"
import MFE2 from "mfe2/mfe2"

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>
      <div>
        <Header />
        <MFE1 />
      </div>
     <div>
        <MFE2/>
     </div>

    </div>
  </div>
);

export default App;