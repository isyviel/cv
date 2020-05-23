import React from "react"
import styled from "styled-components"
import Colors from "./themes/Colors"

const Image =  styled.img`
    height: 100px;
`

const Logo = ({src, ...props}) => {

    return <Image src={src}/>
}

export default Logo