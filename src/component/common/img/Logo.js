import React from "react"
import styled from "styled-components"
import Colors from "../themes/Colors"

const Image =  styled.img`
    height: 100px;
    @media screen and (max-width:992px) {
        height: 80px;
    }
    
    @media screen and (max-width:576px) {
        height: 0px;
        display: none;
    }
`

const Logo = ({alt,src, ...props}) => {

    return <Image alt={alt} src={src}/>
}

export default Logo