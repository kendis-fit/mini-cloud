import styled from "styled-components";

import { BaseBlockItem } from "../StoreStyle";
import Colors from "../../../Constants/Colors";

export const BlockItem = styled(BaseBlockItem)`
    border: 2px solid ${Colors.Gray};
    background: white;
    color: black;

    :hover {
        background: ${Colors.Gray};
        color: white;
    }

    label {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
    }
`;