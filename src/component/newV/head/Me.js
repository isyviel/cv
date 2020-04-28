import styled from "styled-components"

const Me = styled.div`
    position: relative;
    border-radius : 150px;
    height: 150px;
    width: 150px;
    background : url(images/moi.png) no-repeat;
    background-size: 150px;
    left: 165px;

    @media screen and (max-width: 1200px) {
        left: 100px;
    }

    @media screen and (max-width:992px) {
        left: 200px;
    }

    @media screen and (max-width:768px) {
        height: 100px;
        width: 100px;
        background-size: 100px;
        position: static !important;
        margin: auto !important;
    }
    
`
export default Me