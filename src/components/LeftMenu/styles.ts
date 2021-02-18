import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 100%;
    padding-top: 30px;
    padding-left: 50px;
`;
export const ContainerButton = styled.div`
    width: 200px;
    height: 150px;
    padding-top: 30px;   
`;
export const ButtonMenu = styled.button`
    width: 200px;
    height: 25px;
    font-size: 15px;
    color: #5F6368;
    border: none;
    border-radius: 10px;
    outline: none;
    text-align: center;
    display: flex;
    padding: 10px 10px 25px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 50px;
    background-color: #FFF;
    :hover{
        background-color:rgba(188, 184, 255, 0.27);
        color: #6C63FF;
    }
`;