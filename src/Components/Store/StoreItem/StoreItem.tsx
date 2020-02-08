import React from "react";

import { BlockItem } from "./StoreItemStyle";
import IStoreItem from "../Interfaces/IStoreItem";
import downloadFile from "../../../Helpers/downloadFile";

const StoreItem = (props: IStoreItem) => {

    return(
        <>
            <BlockItem title={props.name} onClick={() => downloadFile(`${process.env["REACT_APP_API"]}/stores/${props.StoreId}/items/${props._id}`, props.name)}>
                <div>
                    <img src={`${process.env["REACT_APP_API"]}/images/icons/${props.icon}.png`} height={100} width={100} alt="file" />
                </div>
                <label>{props.name}</label>
            </BlockItem>
            <button onClick={() => props.RemoveItem?.(props.StoreId || "", props._id)}>Delete item</button>
        </>
    )
};

export default StoreItem;