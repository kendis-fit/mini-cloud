import React from "react";

import { BlockItem } from "./StoreItemStyle";
import IStoreItem from "../Interfaces/IStoreItem";

const StoreItem = (props: IStoreItem) => {

    const DownloadFile = () => {

        fetch(`${process.env["REACT_APP_API"]}/stores/${props.StoreId}/items/${props._id}`)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = props.name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            })
            .catch(() => alert('oh no!'));
    }

    return(
        <BlockItem title={props.name} onClick={DownloadFile}>
            <div>
                <img src={`${process.env["REACT_APP_API"]}/images/icons/${props.icon}.png`} height={100} width={100} alt="file" />
            </div>
            <label>{props.name}</label>
        </BlockItem>
    )
};

export default StoreItem;