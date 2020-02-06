import React from "react";

import { BlockItem } from "./StoreItemStyle";
import IStoreItem from "../Interfaces/IStoreItem";

const StoreItem = (props: IStoreItem) => {
    return(
        <BlockItem title={props.name}>
            <div>
                <img src={`${process.env["REACT_APP_API"]}/images/icons/${props.icon}.png`} height={100} width={100} alt="file" />
            </div>
            <label>{props.name}</label>
        </BlockItem>
    )
};

export default StoreItem;