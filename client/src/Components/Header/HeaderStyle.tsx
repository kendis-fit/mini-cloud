import styled from "styled-components";

import Sizes from "../../Constants/Sizes";
import Colors from "../../Constants/Colors";

export const BlockHeader = styled.header`
    position: fixed;

    background: ${Colors.Pink};
    color: white;
    
    height: ${Sizes.HeaderHeight};
    width: 100vw;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    z-index: 5;
`;

export const Logo = styled.div`

    @media screen and (max-width: 500px) {
        display: none;
    }

`;