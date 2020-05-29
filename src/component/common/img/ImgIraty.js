import React from "react"
import styled from "styled-components"
import Colors from "../themes/Colors"
import usePreload from "../hook/loadImg";

const ColImg = styled.img `    
    height: 300px;
    position: fixed;
    top: 60%;
    left:60%;

    z-index: 2;
    @media screen and (max-width:992px) {
        height: 300px;
    }
    @media screen and (max-width:768px) {
        display: none;
    }
`
const IratyImg = ({src,fallBackSrc,alt,...props}) => {
    const motoSrc = usePreload({
        src: src,
        fallBackSrc: fallBackSrc
    });
    
    if(!src) return null;
    return <ColImg alt={alt} src={motoSrc}/>
}

export default IratyImg