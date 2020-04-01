import styled from "styled-components"

export default styled.img`
    width: 35px;
    cursor: pointer;
    padding: 0;
    @media screen and (max-width:768px) {
        width: 30px;
    }
    @media screen and (max-width:576px) {
        height: 20px;
        width: 20px;
    }
`
