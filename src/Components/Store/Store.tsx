import React from "react";

import AddItem from "./AddItem/AddItem";
import StoreItem from "./StoreItem/StoreItem";
import { BlockStore } from "./StoreStyle";

const Store = () => {
    return(
        <BlockStore>
            <StoreItem name="lol.svgfdsfdfsdfdsfdsfsdfnsdkjfndslkfndslnfeufensjds;flksd" icon="svg"  />
            <AddItem Id="fdfdsfsd" />
        </BlockStore>
    )
};

export default Store;