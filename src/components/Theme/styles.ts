import styled from "styled-components";

export const Container = styled.div`
    color: #D9D9D9;
    min-height: 100vh;
    max-width: 980px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 980px;
    height: 80px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    
`;
export const HeaderUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h5{
        font-weight: lighter;
    }
    div{
        width: 50px;
        height: 50px;
        background-color: #6DA7F2;
        margin-left: 10px;
        border-radius: 50%;
        box-shadow: 0 0 8px #FFF;
    }
`;

export const Area = styled.div`
    margin: auto;
    width: 980px;
    flex: 1;
    display: flex;
`;

export const Menu = styled.div`
    font-size: 25px;
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    hr{
        width: 70%;
        height: 1px;
        background-color: #D9D9D9;
        border: 0;
        box-shadow: 0 2px 10px #FFF;
    }
    div{
        margin-top: 20px;
        text-align: center;
        flex: 1;
    }
    button{
        margin: 20px 0;
        background-color: #6DA7F2;
        color: #1C1B19;
        font-weight: bold;
        border: 0;
        padding: 10px;
        border-radius: 20px;
        border: 0;
        box-shadow: 0 0 3px #D9D9D9;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    margin: 10px;
    background-color: #1C1B19;
    border-radius: 10px;
    flex: 4;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
    width: 980px;
    height: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;