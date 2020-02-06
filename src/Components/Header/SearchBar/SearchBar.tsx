import React, { useState } from "react";

import search from "../../../Images/search.png";
import { FlexBlock } from "../../Styles/Block";
import { SearchTextBox } from "./SearchBarStyle";
import { ButtonWithImage } from "../../Styles/Button";
import ISearchActions from "../Interfaces/ISearchActions";

const SearchBar = (props: ISearchActions) => {

    const [searchHash, setSearchHash] = useState("");

    return(
        <FlexBlock>
            <ButtonWithImage type="button" onClick={() => props.GetStore(searchHash)}>
                <img src={search} alt="search" height={24} width={24} />
            </ButtonWithImage>
            <SearchTextBox placeholder="Search files by hash..." value={searchHash} onChange={(e) => setSearchHash(e.target.value)} />
        </FlexBlock>
    )
};

export default SearchBar;