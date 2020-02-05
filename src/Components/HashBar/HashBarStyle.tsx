import styled from "styled-components";

export const HashBox = styled.input.attrs(() => ({ readOnly: true }))`
    margin-right: 5px;
    padding: 5px;

    border-radius: 5px;
    border: 0;

    height: 25px;
    width: 300px;

    color: gray;
`;