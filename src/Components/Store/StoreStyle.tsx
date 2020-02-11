import styled from "styled-components";

import Sizes from "../../Constants/Sizes";

export const BlockStore = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    position: absolute;
    top: calc(${Sizes.HeaderHeight} + ${Sizes.HashHeight});

    height: calc(100vh - ${Sizes.HeaderHeight} - ${Sizes.HashHeight});
    width: 100vw;
`;

export const BaseBlockItem = styled.div`
    border-radius: 5px;
    color: white;

    height: 220px;
    width: 200px;

    margin: 25px;

    cursor: pointer;

    text-align: center;
`;

export const BlockUploadFiles = styled.div`
    position: fixed;
    top: calc(${Sizes.HeaderHeight} + ${Sizes.HashHeight});
    left: 0;

    height: calc(100vh - ${Sizes.HeaderHeight} - ${Sizes.HashHeight});
    width: 100vw;

    z-index: 5;

    background: rgba(0, 0, 0, 0.4);
    color: white;

    font-size: 48px;
    text-align: center;

    display: flex;
    align-content: center;

    div {
        width: 100%;
    }

    [hide=''] {
        display: none;
    }
`;