import React from "react";

import { BlockHeader, Logo } from "./HeaderStyle";
import MenuBarContainer from "./MenuBar/MenuBarContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";

const Header = () => {
    return(
        <BlockHeader>
            <Logo>Mini-store</Logo>
            <MenuBarContainer />
            <SearchBarContainer />
        </BlockHeader>
    )
};

export default Header;