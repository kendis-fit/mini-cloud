import React, { createRef } from "react";

import { BlockItem } from "./AddItemStyle";
import plus from "../../../Images/plus.png";
import IAddItem from "../Interfaces/IAddItem";
import plusHover from "../../../Images/plus-hover.png";

const AddItem = (props: IAddItem) => {

    const form = createRef<HTMLFormElement>();
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
        if (fileInput.current && form.current)
        {
            if (fileInput.current.files)
            {
                form.current.submit();
            }
        }
    }

    return(
        <form ref={form} action={`/${props.Id}/items`} method="post" encType="multipart/form-data">
            <BlockItem type="button" onClick={SelectFile} onMouseOver={() => ChangeImage(true)} onMouseOut={() => ChangeImage(false)}>
                <div>
                    <img ref={plusImage} src={plus} height={100} width={100} alt="Add file" />
                </div>
                <label>Add file</label>
                <input name="file" onChange={LoadFile} ref={fileInput} type="file" />
            </BlockItem>
        </form>
    );
}

export default AddItem;