import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 125px;
    background: #F2F2F2;
    display: flex;
    align-items: center;
    
    .footer-contents:not(:first-child){
        border-left: 3px solid #BCB8FF;
    }

    .footer-contents-logo{
        
    }

    .footer-contents-text{
        div{
            line-height: 25px;

            h3{
                font-size: 15px;
            }

            p{
                font-weight: lighter;
                font-size: 14px; 
            }
        }
    }

    .footer-contents-icons{
       .footer-content-icon{
           margin-left: 20px;
           
       }
    }
`;

export const Content = styled.div`
    width: 25%;
    height: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
