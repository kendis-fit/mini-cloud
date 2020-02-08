import React from "react";

import { BlockItem } from "./StoreItemStyle";
import IStoreItem from "../Interfaces/IStoreItem";
import downloadFile from "../../../Helpers/downloadFile";

const StoreItem = (props: IStoreItem) => {

    const DownloadFile = (e: any) => {
        if (e.target.tagName !== "BUTTON") {
            downloadFile(`${process.env["REACT_APP_API"]}/stores/${props.StoreId}/items/${props._id}`, props.name);
        }
    }

    const ConfirmRemove = () => {

        const confirmRemove = window.confirm(`Are you sure you want to delete file ${props.name}`);

        if (confirmRemove)
        {
            props.RemoveItem?.(props.StoreId || "", props._id);
        }
    }

    return(
        <BlockItem title={props.name} onClick={DownloadFile}>
            <button onClick={ConfirmRemove}>&times;</button>
            <div>
                <img src={`${process.env["REACT_APP_API"]}/images/icons/${props.icon}.png`} height={100} width={100} alt="file" />
            </div>
            <label>{props.name}</label>
        </BlockItem>
    )
};

export default StoreItem;