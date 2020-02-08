import React, { createRef } from "react";

import { BlockItem } from "./AddItemStyle";
import plus from "../../../Images/plus.png";
import IAddItem from "../Interfaces/IAddItem";
import plusHover from "../../../Images/plus-hover.png";

const AddItem = (props: IAddItem) => {

    const plusImage = createRef<HTMLImageElement>();
    const fileInput = createRef<HTMLInputElement>();

    const ChangeImage = (isHover: boolean) => {
        if (plusImage.current)
        {
           plusImage.current.src = isHover ? plusHover : plus;
        }
    }

    const SelectFile = () => {
        fileInput.current?.click();
    }

    const LoadFile = () => {
        if (fileInput.current && fileInput.current.files && props.Id)
        {
            const id = props.Id;
            const files = fileInput.current.files;
            const countFiles = files.length;

            for (let i = 0; i < countFiles; ++i)
            {
                const file = files[i];
                const name = files[i].name;

                props.AddItem(id, name, async (itemId: string) => {

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
                            props.RemoveItem(id, itemId);
                        }
                    }
                });
            }
        }
    }

    return(
        <BlockItem type="button" onClick={SelectFile} onMouseOver={() => ChangeImage(true)} onMouseOut={() => ChangeImage(false)}>
            <div>
                <img ref={plusImage} src={plus} height={100} width={100} alt="Add file" />
            </div>
            <label>Add file</label>
            <input name="file" onChange={LoadFile} ref={fileInput} type="file" multiple />
        </BlockItem>
    );
}

export default AddItem;