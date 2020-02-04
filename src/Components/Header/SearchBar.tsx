import React from "react";

import { SearchTextBox } from "../Header/HeaderStyle";

const SearchBar = () => {
    return(
        <div>
            <SearchTextBox placeholder="search files by hash" />
        </div>
    )
};

export default SearchBar;