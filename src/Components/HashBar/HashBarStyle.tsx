import styled from "styled-components";

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
    border-bottom: 4px dashed ${Colors.Pink};
    padding: 10px;
`;