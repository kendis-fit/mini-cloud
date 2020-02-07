import styled from "styled-components";

import { BaseBlockItem } from "../StoreStyle";

export const BlockItem = styled(BaseBlockItem)`
    border: 0;
    background: rgba(0, 0, 0, 0.3);
    color: white;

    :hover {
        background: rgba(0, 0, 0, 0.25);
    }

    label {
        display: block;
        height: 50px;
        word-wrap: break-word;
        padding: 10px;
        cursor: pointer;
    }

    iframe {
        display: none;
    }
`;