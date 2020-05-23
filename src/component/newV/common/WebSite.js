import React from "react"
import styled from "styled-components"
import Colors from "./themes/Colors"

const Link =  styled.a`
    :hover{
        text-decoration: none;
        color: ${Colors.darkOrange};
    }
    color: ${Colors.orange};
`

const WebSite = ({href, content,...props}) => {

    return <Link href={href} target="__blank">{content}</Link>
}

export default WebSite