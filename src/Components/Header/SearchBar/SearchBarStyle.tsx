import styled from "styled-components";

import Colors from "../../../Constants/Colors";

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