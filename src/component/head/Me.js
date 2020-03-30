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
    bottom: 350px;
    right: 0px;
    
    @media screen and (max-width: 1197px) {
        position : relative;
        bottom: 300px;
        left: 200px;
    }
      
`
export default Me