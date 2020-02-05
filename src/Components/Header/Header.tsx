import React from "react";

import MenuBar from "./MenuBar/MenuBar";
import SearchBar from "./SearchBar/SearchBar";
import { BlockHeader } from "./HeaderStyle";

const Header = () => {
    return(
        <BlockHeader>
            <div>Mini-store</div>
            <MenuBar />
            <SearchBar />
        </BlockHeader>
    )
};

export default Header;