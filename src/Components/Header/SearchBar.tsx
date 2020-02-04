import React from "react";

import { FlexBlock } from "../Styles/Block";
import search from "../../Images/search.png";
import { SearchTextBox, SearchButton } from "../Header/HeaderStyle";

const SearchBar = () => {
    return(
        <FlexBlock>
            <SearchButton type="button">
                <img src={search} alt="search" height={24} width={24} />
            </SearchButton>
            <SearchTextBox placeholder="Search files by hash..." />
        </FlexBlock>
    )
};

export default SearchBar;