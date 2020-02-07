import React from "react";

import IStore from "./Interfaces/IStore";
import { BlockStore } from "./StoreStyle";
import StoreItem from "./StoreItem/StoreItem";
import AddItemContainer from "./AddItem/AddItemContainer";

const Store = (props: IStore) => {

    if (typeof props.Id === "undefined")
    {
        return <div>Empty</div>
    } 

    return(
        <BlockStore>
            {
                props.Items && props.Items.map((item, key) => <StoreItem key={key} StoreId={props.Id} {...item} />)
            }
            <AddItemContainer />
        </BlockStore>
    )
};

export default Store;