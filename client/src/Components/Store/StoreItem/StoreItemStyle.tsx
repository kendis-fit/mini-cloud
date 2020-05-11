import styled from "styled-components";

import { BaseBlockItem } from "../StoreStyle";

export const BlockItem = styled(BaseBlockItem)`
    border: 0;
    background: rgba(0, 0, 0, 0.3);
    color: white;

    div:first-child { /* block menu */
        text-align: right;

        button {
            border: 0;
            font-size: 32px;
            background: transparent;
            padding: 0 5px 5px 5px;
            cursor: pointer;
        }

        button:hover {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 5px;
        }
    }

    label {
        display: block;
        height: 50px;
        word-wrap: break-word;
        padding: 10px;

        cursor: pointer;
    }
`;