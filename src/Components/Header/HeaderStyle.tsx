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
`;