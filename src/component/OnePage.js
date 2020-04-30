import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './newV/elements/Head'
import Content from './newV/elements/Content'
import Navigation from './newV/elements/Navigation'
import {HEIGHT} from './newV/common/themes/Sizes'
import MiniHead from "./newV/elements/MiniHead"
import { Collapse } from "@material-ui/core"

const CustomDiv = styled(Container)`
    height: ${HEIGHT};
    background: url(images/deco_ronds.png) no-repeat center fixed ;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
`

const OnePage = () => {
    const [isHome,setIsHome] = useState(true)
    const [isContent, setIsContent] = useState(false);

    const displayContent = () => {
        setIsContent(true)
        setIsHome(false)
    }

    const returnToHome =() => {
        setIsContent(false)
        setIsHome(true)
    }

    return (
        <CustomDiv fluid data-nosnippet>
                {isHome ? <Head isHome={isHome}/> : <MiniHead/>}
                <Content contentIsShown={isContent} hideContent={returnToHome} goToContent={displayContent}/>
                <Navigation/>
        </CustomDiv>
    )
}

export default OnePage