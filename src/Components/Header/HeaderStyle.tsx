import styled from "styled-components";

import Sizes from "../../Constants/Sizes";
import Colors from "../../Constants/Colors";

export const BlockHeader = styled.header`
    background: ${Colors.Pink};
    color: white;
    
    height: ${Sizes.HeaderHeight};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const SearchButton = styled.button`
    border: 0;
    background: transparent;

    cursor: pointer;

    padding-right: 5px;
`;

export const SearchTextBox = styled.input`
    border: 0;
    background: ${Colors.Pink};
    color: white;

    font-size: 16px;

    ::placeholder {
        opacity: 1;
    }
`;