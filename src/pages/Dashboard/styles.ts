import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 0;
    h3{
        margin: 0;
    }
`;

export const TopBox = styled.div`
    width: 100%;
    padding-bottom: 10px;
    flex-shrink: 0;
`;
export const TopBoxInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    div:last-child{
        margin-right: 0;
    }
`;

export const Box = styled.div`
    flex: 1;
    background-color: #121011;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h4{
        margin: 0;
        font-weight: lighter;
    }
    div{
        flex: 1;
        font-weight: bold;
        font-size: 20px;
        text-align: right;
        padding-bottom: 10px;
        padding-right: 10px;
    }
`;

export const BottomBox = styled.div`
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;

    h3{
        margin: 0;
    }
`;

export const SideLeft = styled.div`
    flex: 1.3;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    h3{
        flex-grow: 0;
    }
`;

export const SideLeftTable = styled.div`
    background-color: #121011;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    flex-grow: 1;
    flex-shrink: 0;
`;

export const SideRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    h3{
        flex-grow: 0;
    }
`;

export const SideRightGraphic = styled.div`
    background-color: #121011;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    flex-grow: 1;
    flex-shrink: 0;
`;