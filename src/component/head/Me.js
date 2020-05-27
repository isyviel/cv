import styled from "styled-components"

const Me = styled.div`
    margin: 0 150px 0 0;
    border-radius : 150px;
    height: 150px;
    width: 150px;
    background : url(images/moi.png) no-repeat;
    background-size: 150px;
    
    @media screen and (max-width: 1200px) {
        margin: 0 100px 0 0;
    }

    @media screen and (max-width:992px) {
        margin: 0 25px 0 0;
        height: 100px;
        width: 100px;
        background-size: 100px;
    }

    @media screen and (max-width:768px) {
        height: 70px;
        width: 70px;
        background-size: 70px;
        margin: 0 15px 0 0;
    }
    
    @media screen and (max-width:576px) {
        display: none;
    }
`
export default Me