import React from "react"
import styled from "styled-components"

const Image =  styled.img`
    height: 100px;
    @media screen and (max-width:992px) {
        height: 80px;
    }
    
    @media screen and (max-width:768px) {
        height: 0px;
        display: none;
    }
`

const Logo = ({alt,src, ...props}) => {
    return <Image alt={alt} src={src}/>
}

export default Logo