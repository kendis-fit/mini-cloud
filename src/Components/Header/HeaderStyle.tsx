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

export const SearchTextBox = styled.input`
    border: 0;
    background: ${Colors.Pink};
    color: white;

    font-size: 16px;

    ::placeholder {
        opacity: 1;
    }

    padding-left: 5px;
`;

export const HashBox = styled.input.attrs(() => ({ readOnly: true }))`
    margin-right: 5px;
    padding: 5px;

    border-radius: 5px;
    border: 0;

    height: 25px;
    width: 300px;

    color: gray;
`;