import React, { createRef } from "react";

import { BlockItem } from "./AddItemStyle";
import plus from "../../../Images/plus.png";
import plusHover from "../../../Images/plus-hover.png";

const AddItem = () => {

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
        if (fileInput.current)
        {
            if (fileInput.current.files)
            {
                alert(fileInput.current.files[0].name);
            }
        }
    }

    return(
        <form action={`/:id/items/:itemId`} method="post" encType="multipart/form-data">
            <BlockItem type="button" onClick={SelectFile} onMouseOver={() => ChangeImage(true)} onMouseOut={() => ChangeImage(false)}>
                <div>
                    <img ref={plusImage} src={plus} height={100} width={100} alt="Add file" />
                </div>
                <label>Add file</label>
                <input name="file" onChange={LoadFile} ref={fileInput} style={{ display: "none" }} type="file" />
            </BlockItem>
        </form>
    );
}

export default AddItem;