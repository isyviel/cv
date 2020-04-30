import React from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import { Slide } from "@material-ui/core"

const DetalesContainer =  styled(Container)`
    height: 400px;
    min-width: 99%;
    background-color: rgba(255,255,255,0.7);
    margin: 0;
    padding: 5% 5% 5% 10%;
    font-family: Arial;
    font-size: 16px;
    z-index: 1;
`
const Cross = styled.img`
    cursor: pointer;
    width: 20px;
`
const Detales = ({viewDetales, closeSlide,...props}) => {

    return(
        <Slide timeout={800} in={viewDetales} direction="left">
            <DetalesContainer>
                <Row className="justify-content-end">
                    <Cross onClick={closeSlide} src="images/croix.png" alt="croix"/>
                </Row>
                <p>Expérience</p>
                <article>
                    There are many variations of passages of Lorem Ipsum available, but the 
                    majority have suffered alteration in some form, by injected humour, or 
                    randomised words which don't look even slightly believable. If you are 
                    going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                    generators on the Internet tend to repeat predefined chunks as 
                    necessary, making this the first true generator on the Internet. It uses
                    a dictionary of over 200 Latin words, combined with a handful of model 
                    sentence structures, to generate Lorem Ipsum which looks reasonable. The
                    generated Lorem Ipsum is therefore always free from repetition, 
                    injected humour, or non-characteristic words etc.
                </article>
            </DetalesContainer>
        </Slide>
    )
}

export default Detales