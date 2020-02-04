import React from "react";

import Store from "./Store/Store";
import Header from "./Header/Header";

import "../root.css";

const App = () => {
    return(
        <div>
            <Header />
            <Store />
        </div>
    );
}

export default App;