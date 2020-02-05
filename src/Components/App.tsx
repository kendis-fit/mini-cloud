import React from "react";

import Store from "./Store/Store";
import Header from "./Header/Header";
import HashBar from "./HashBar/HashBar";

import "../root.css";

const App = () => {
    return(
        <main>
            <Header />
            <HashBar Visible={true} Value={"43249u35rkjterlkjhglske12qw2"} />
            <Store />
        </main>
    );
}

export default App;