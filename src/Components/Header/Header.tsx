import React from "react";

import { BlockHeader } from "./HeaderStyle";
import MenuBarContainer from "./MenuBar/MenuBarContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";

const Header = () => {
    return(
        <BlockHeader>
            <div>Mini-store</div>
            <MenuBarContainer />
            <SearchBarContainer />
        </BlockHeader>
    )
};

export default Header;