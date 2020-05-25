import React from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide } from "@material-ui/core"

const CustomContainer = styled(Container)`
    padding: 13% 45% 0 8%;
    margin-left: 350px;
    font-size: 20px;

    @media screen and (min-width:1400px) {
        padding: 13% 25% 0 10%;
    }
    @media screen and (max-width:1200px) {
        padding: 13% 25% 0 15%;
        margin-left: 200px;
    }
    
    @media screen and (max-width:992px) {
        padding: 13% 20% 0 15%;
        margin-left: 30px;
    }

    @media screen and (max-width:768px) {
        position: fixed;
        padding:0;
        margin:0;
        font-size: 15px;
        left: 110px;
        top: 150px;
        width: 75%;
    }

    @media screen and (max-width:576px) {
        font-size: 15px;
        left: 50px;
        top: 100px;
        width: 80%;
    }
`
const Aboutme = ({isHome,...props}) => {
    return (
        <Slide timeout={800} direction="right" in={isHome}>
            <CustomContainer>
                <article className="text-justify">
                    SITE EN CONSTRUCTION
                </article>
            </CustomContainer>
        </Slide>
    )
}

export default Aboutme