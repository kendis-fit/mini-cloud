import styled from "styled-components";

import Colors from "../../../Constants/Colors";

export const ButtonGenerate = styled.button`
    border: 1px solid ${Colors.LightPink};
    border-radius: 5px;
    background: ${Colors.LightPink};
    color: white;

    font-size: 16px;
    font-weight: bold;

    padding: 10px;

    cursor: pointer;

    :hover {
        background: ${Colors.HoverPink};
    }
`;