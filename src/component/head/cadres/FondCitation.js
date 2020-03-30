import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

export default styled(Container)`
    height: 180px;
    width: 550px;
    border-radius: 30px;
    background-color: rgba(79,79,79,0.5);
    box-shadow: 0 2px 4px 0 #000;
    position: relative;
    left: 300px;
    top: 300px;

    @media screen and (max-width:992px) {
        width: 350px;
        left: 280px;
        
    }

    @media screen and (max-width:768px) {
        position: static !important;
        height: 50px;
        min-width: 100%;
        border-radius: 0px;
        background-color: rgba(255,255,255,0);
        box-shadow: none;
        margin-bottom: 100px;
        margin-top: 50px;
    }

    @media screen and (max-width:576px) {
        display: none;
    }

    
    
     


`