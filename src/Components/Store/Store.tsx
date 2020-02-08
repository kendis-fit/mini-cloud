import React from "react";

import IStore from "./Interfaces/IStore";
import { BlockStore } from "./StoreStyle";
import AddItemContainer from "./AddItem/AddItemContainer";
import StoreItemContainer from "./StoreItem/StoreItemContainer";

const Store = (props: IStore) => {

    if (typeof props.Id === "undefined")
    {
        return <div>Empty</div>
    }

    return(
        <BlockStore>
            {
                props.Items && props.Items.map((item, key) => <StoreItemContainer key={key} StoreId={props.Id} {...item} />)
            }
            <AddItemContainer />
        </BlockStore>
    )
};

export default Store;