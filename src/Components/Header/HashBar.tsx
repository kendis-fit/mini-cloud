import React, { createRef } from "react";

import { HashBox } from "./HeaderStyle";
import copy from "../../Images/copy.png";
import { FlexBlock } from "../Styles/Block";
import { ButtonWithImage  } from "../Styles/Button";

const HashBar = () => {

    const hash = createRef<HTMLInputElement>();

    const CopyHashToClipboard = () => {
        if (hash.current !== null) 
        {
            hash.current.select();
            hash.current.setSelectionRange(0, 99999);
            document.execCommand("copy");
        }
    }

    return(
        <FlexBlock>
            <HashBox ref={hash} type="text" value={"4324jk234hj2k3g4jk23gk"}>
            </HashBox>
            <ButtonWithImage type="button" onClick={CopyHashToClipboard}>
                <img src={copy} alt="copy hash" height={32} width={32} />
            </ButtonWithImage>
        </FlexBlock>
    )
};

export default HashBar;