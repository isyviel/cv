import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'
import Title from './Title'
import styled from "styled-components"

const Image = ({isForm,...props}) => {
    return (
        <img src="images/background.jpg"/>
    )
}

export default styled(Image)`

`