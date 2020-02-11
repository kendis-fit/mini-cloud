import React, { useState } from "react";

import AddItem from "./AddItem/AddItem";
import IStore from "./Interfaces/IStore";
import { FlexBlock } from "../Styles/Block";
import { BlockStore, BlockUploadFiles } from "./StoreStyle";
import StoreItemContainer from "./StoreItem/StoreItemContainer";

const Store = (props: IStore) => {
    
    const [showUploadFiles, setShowUploadFiles] = useState(false);

    const LoadFiles = (files: FileList, IsLoad?: () => void) => {
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

            IsLoad?.();
        }
    }
    
    const Drop = (e: any) => {
        e.preventDefault();
        LoadFiles(e.dataTransfer.files, () => setShowUploadFiles(false));
    }
    
    const DragOver = (e: any) => {
        e.preventDefault();
        setShowUploadFiles(true);
    }
    
    const DragLeave = (e: any) => {
        e.preventDefault();
        setShowUploadFiles(false);
    }
    
    if (typeof props.Id === "undefined")
    {
        return <div>Empty</div>
    }
    
    return(
        <>
            <BlockStore onDragOver={DragOver}>
                {
                    props.Items && props.Items.map((item, key) => <StoreItemContainer key={key} StoreId={props.Id} {...item} />)
                }
                <AddItem LoadFiles={LoadFiles} />
            </BlockStore>
            {
                showUploadFiles && <BlockUploadFiles onDrop={Drop} onDragOver={(e) => e.preventDefault()} onDragLeave={DragLeave}>
                    <FlexBlock>Drop files to upload...</FlexBlock> 
                </BlockUploadFiles>
            }
        </>
    )
};

export default Store;