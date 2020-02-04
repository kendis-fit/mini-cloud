import React from "react";

import { FlexBlock } from "../Styles/Block";
import search from "../../Images/search.png";
import { ButtonWithImage } from "../Styles/Button";
import { SearchTextBox } from "../Header/HeaderStyle";

const SearchBar = () => {
    return(
        <FlexBlock>
            <ButtonWithImage type="button">
                <img src={search} alt="search" height={24} width={24} />
            </ButtonWithImage>
            <SearchTextBox placeholder="Search files by hash..." />
        </FlexBlock>
    )
};

export default SearchBar;