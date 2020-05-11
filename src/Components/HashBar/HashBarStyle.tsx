import styled from "styled-components";

import Sizes from "../../Constants/Sizes";
import Colors from "../../Constants/Colors";

export const HashBox = styled.input.attrs(() => ({ readOnly: true }))`
    margin-right: 5px;
    padding: 5px;

    border: 2px solid gray;

    height: 25px;
    width: 800px;

    color: gray;
`;

export const BlockHashBox = styled.div`
    position: fixed;
    top: ${Sizes.HeaderHeight};
    left: 0;

    width: 100vw;

    border-bottom: 4px dashed ${Colors.Pink};
    padding: 10px;

    background: white;

    z-index: 5;
`;