import styled from "styled-components";

import Colors from "../../../Constants/Colors";

export const SearchTextBox = styled.input`
    border: 0;
    background: ${Colors.Pink};
    color: white;

    font-size: 16px;
    
    padding-left: 5px;

    ::placeholder {
        opacity: 1;
    }

    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;