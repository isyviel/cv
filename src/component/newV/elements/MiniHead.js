import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Contact from '../head/Contact'
import { Slide } from "@material-ui/core"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 80px;
    background-color: #272727;
    position: fixed;
    padding-top: 17%;
    z-index: 2;
`
const MiniHead = ({isHome,...props}) => {
    return (
        <Slide direction="right" in={!isHome}>
            <HomeContainer fluid>
                <Contact/>
            </HomeContainer>
        </Slide>
    )
}

export default MiniHead