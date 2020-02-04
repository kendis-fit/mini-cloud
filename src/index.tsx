import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { unregister } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

unregister();