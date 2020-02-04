import React from "react";

import HashBar from "./HashBar";
import SearchBar from "./SearchBar";

import { BlockHeader } from "./HeaderStyle";

const Header = () => {
    return(
        <BlockHeader>
            <div>Mini-store</div>
            <HashBar />
            <SearchBar />
        </BlockHeader>
    )
};

export default Header;