import React from "react";

import AddItem from "./AddItem/AddItem";
import IStore from "./Interfaces/IStore";
import { BlockStore } from "./StoreStyle";
import StoreItem from "./StoreItem/StoreItem";

const Store = (props: IStore) => {

    if (typeof props.Id === "undefined")
    {
        return <div>Empty</div>
    } 

    return(
        <BlockStore>
            {
                props.Items && props.Items.map((item, key) => <StoreItem key={key} {...item} />)
            }
            <AddItem Id={props.Id} />
        </BlockStore>
    )
};

export default Store;