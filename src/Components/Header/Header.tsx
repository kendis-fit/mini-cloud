import React from "react";

import SearchBar from "./SearchBar/SearchBar";
import { BlockHeader } from "./HeaderStyle";
import MenuBarContainer from "./MenuBar/MenuBarContainer";

const Header = () => {
    return(
        <BlockHeader>
            <div>Mini-store</div>
            <MenuBarContainer />
            <SearchBar />
        </BlockHeader>
    )
};

export default Header;