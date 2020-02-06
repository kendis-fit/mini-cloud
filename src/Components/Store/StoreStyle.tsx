import styled from "styled-components";

export const BlockStore = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const BlockItem = styled.button`
    border: 0;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    
    height: 220px;
    width: 200px;

    margin: 25px;
    
    cursor: pointer;
    
    :hover {
        background: rgba(0, 0, 0, 0.25);
    }

    label {
        display: block;
        height: 50px;
        word-wrap: break-word;
        padding: 10px;
        cursor: pointer;
    }
`;