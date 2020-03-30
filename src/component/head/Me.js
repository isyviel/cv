import styled from "styled-components"

const Me = styled.div`
    border-radius : 150px;
    height: 200px;
    width: 200px;
    background : url(images/moi.png);
    background-size: 200px;
    border: 1px solid #FFF;
    box-shadow: 0 2px 2px 0 #828282;
    position : relative;
    bottom: 50px;
    z-index: 2;

    @media screen and (max-width: 1200px) {
        position : relative;
        left: 100px;
    }

    @media screen and (max-width:992px) {
        height: 150px;
        width: 150px;
        background-size: 150px;
        left: 200px;
    }

    @media screen and (max-width:768px) {
        height: 100px;
        width: 100px;
        background-size: 100px;
        position: static !important;
        margin: auto !important;
    }
    

    @media screen and (max-width:576px)  {
        height: 100px;
        width: 100px;
        background-size: 100px;
        
    }
`
export default Me