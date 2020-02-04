import React from "react";

import Store from "./Store/Store";
import Header from "./Header/Header";

import "../root.css";

const App = () => {
    return(
        <main>
            <Header />
            <Store />
        </main>
    );
}

export default App;