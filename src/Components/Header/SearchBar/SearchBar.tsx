import React from "react";

import search from "../../../Images/search.png";
import { FlexBlock } from "../../Styles/Block";
import { SearchTextBox } from "./SearchBarStyle";
import { ButtonWithImage } from "../../Styles/Button";

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