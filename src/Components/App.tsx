import React from "react";

import Header from "./Header/Header";
import HashBarContainer from "./HashBar/HashBarContainer";
import StoreContainer from "./Store/StoreContainer";

import "../root.css";

const App = () => {
    return(
        <main>
            <Header />
            <HashBarContainer />
            <StoreContainer />
        </main>
    );
}

export default App;