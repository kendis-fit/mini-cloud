import styled from "styled-components";

import Sizes from "../../Constants/Sizes";

export const BlockStore = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    height: calc(100vh - ${Sizes.HeaderHeight});
`;

export const BaseBlockItem = styled.button`
    border-radius: 5px;
    color: white;

    height: 220px;
    width: 200px;

    margin: 25px;

    cursor: pointer;
`;