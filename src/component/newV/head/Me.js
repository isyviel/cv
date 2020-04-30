import styled from "styled-components"

const Me = styled.div`
    margin: 0 0 0 25%;
    border-radius : 150px;
    height: 150px;
    width: 150px;
    background : url(images/moi.png) no-repeat;
    background-size: 150px;
    
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