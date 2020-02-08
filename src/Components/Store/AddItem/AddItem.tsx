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

    const LoadFiles = () => {
        if (fileInput.current && fileInput.current.files)
        {
            props.LoadFiles(fileInput.current.files);
        }
    }

    return(
        <BlockItem type="button" onClick={SelectFile} onMouseOver={() => ChangeImage(true)} onMouseOut={() => ChangeImage(false)}>
            <div>
                <img ref={plusImage} src={plus} height={100} width={100} alt="Add file" />
            </div>
            <label>Add file</label>
            <input name="file" onChange={LoadFiles} ref={fileInput} type="file" multiple />
        </BlockItem>
    );
}

export default AddItem;