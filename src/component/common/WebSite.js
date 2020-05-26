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
const Text = styled.p`
    color: ${Colors.orange};
    margin: 0;
`

const WebSite = ({href, content, isSales,isEnglish,...props}) => {

    return isSales || isEnglish ? <Text>{content}</Text> : <Link href={href} target="__blank">{content}</Link>
}

export default WebSite