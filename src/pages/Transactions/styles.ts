import styled from "styled-components";

export const Container = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
`;

export const TopBox = styled.div`
    background-color: #121011;
    flex-grow: 0;
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h3{
        margin: 0;
        margin-bottom: 10px;
        padding: 0;
    }
`;
export const Fields = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 14px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
    }
    input{
        min-width: 90px;
        background-color: #DDD;
        font-size: 14px;
        padding: 5px;
        border: 0;
        color: #121011;
        border-radius: 5px;
        outline: 0;
    }
    input::placeholder{
        color: #121011;
    }
    select{
        background-color: #DDD;
        padding: 5px;
        color: #121011;
        border: 0;
        outline: 0;
        border-radius: 5px;
    }
`;
export const ButtonFields = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: right;

    button{
        background-color: #6DA7F2;
        color: #1C1B19;
        border: 0;
        font-weight: bold;
        padding: 10px;
        border-radius: 20px;
        box-shadow: 0 0 3px #D9D9D9;
    }
    button:hover{
        opacity: .8;
    }
`;

export const BottomBox = styled.div`
    background-color: #121011;
    flex-grow: 1;
    margin: 0 20px 20px;
    border-radius: 10px;
`;