import React from "react";

import IStore from "./Interfaces/IStore";
import AddItem from "./AddItem/AddItem";
import { BlockStore } from "./StoreStyle";
import StoreItemContainer from "./StoreItem/StoreItemContainer";

const Store = (props: IStore) => {

    if (typeof props.Id === "undefined")
    {
        return <div>Empty</div>
    }

    const LoadFiles = (files: FileList) => {
        if (props.Id)
        {
            const id = props.Id;
            const countFiles = files.length;

            for (let i = 0; i < countFiles; ++i)
            {
                const file = files[i];
                const name = files[i].name;

                props.AddItem?.(id, name, async (itemId: string) => {

                    if (id)
                    {
                        const formData = new FormData();
                        formData.append("file", file, name);
                        
                        const response = await fetch(`${process.env["REACT_APP_API"]}/stores/${id}/items/${itemId}`,
                        {
                            method: "POST",
                            body: formData
                        });

                        if (!response.ok)
                        {
                            props.RemoveItem?.(id, itemId);
                        }
                    }
                });
            }
        }
    }

    const Drop = (e: any) => {
        e.preventDefault();
        LoadFiles(e.dataTransfer.files);
    }

    const DragOverHandler = (e: any) => {
        e.preventDefault();
    }

    return(
        <BlockStore onDrop={Drop} onDragOver={DragOverHandler}>
            {
                props.Items && props.Items.map((item, key) => <StoreItemContainer key={key} StoreId={props.Id} {...item} />)
            }
            <AddItem LoadFiles={LoadFiles} />
        </BlockStore>
    )
};

export default Store;