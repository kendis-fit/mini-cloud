import React from "react";

import Header from "./Header/Header";
import HashBar from "./HashBar/HashBar";
import StoreContainer from "./Store/StoreContainer";

import "../root.css";

const App = () => {
    return(
        <main>
            <Header />
            <HashBar Visible={true} Value={"43249u35rkjterlkjhglske12qw2"} />
            <StoreContainer />
        </main>
    );
}

export default App;