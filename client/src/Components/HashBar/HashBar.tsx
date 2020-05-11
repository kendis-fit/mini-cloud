import React, { createRef } from "react";

import copy from "../../Images/copy.png";
import { HashBox, BlockHashBox } from "./HashBarStyle";
import { FlexBlock } from "../Styles/Block";
import IHashProps from "./Interfaces/IHash";
import { ButtonWithImage  } from "../Styles/Button";

const HashBar = (props: IHashProps) => {

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
        <>
        {   
            props.Value &&
                <BlockHashBox>
                    <FlexBlock>
                        <HashBox ref={hash} type="text" value={props.Value} />
                        <ButtonWithImage type="button" onClick={CopyHashToClipboard}>
                            <img src={copy} alt="copy hash" height={32} width={32} />
                        </ButtonWithImage>
                    </FlexBlock>
                </BlockHashBox>
        }
        </>
    )
};

export default HashBar;