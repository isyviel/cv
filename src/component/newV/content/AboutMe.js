import React from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide } from "@material-ui/core"

const CustomContainer = styled(Container)`
    padding: 13% 0 0 8%;
    font-size: 20px;

    @media screen and (max-width:576px) {
        font-size: 15px;
        padding: 0;
        position: fixed;
        left: 50px;
        top: 100px;
        width: 80%;
        
    }
`
const Aboutme = ({isHome,...props}) => {
    return (
        <Slide timeout={800} direction="right" in={isHome}>
            <CustomContainer>
                <article className="text-justify">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"</article>
            </CustomContainer>
        </Slide>
    )
}

export default Aboutme