import styled from "styled-components"

const Me = styled.div`
    border-radius : 150px;
    height: 150px;
    width: 150px;
    background : url(images/moi.png) no-repeat;
    background-size: 150px;

    @media screen and (max-width:992px) {
        height: 100px;
        width: 100px;
        background-size: 100px;
    }

    @media screen and (max-width:768px) {
        height: 70px;
        width: 70px;
        background-size: 70px;
    }
    
    @media screen and (max-width:576px) {
        display: none;
    }
`
export default Me