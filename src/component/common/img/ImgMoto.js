import React from "react"
import styled from "styled-components"
import Colors from "../themes/Colors"
import usePreload from "../hook/loadImg";

const Moto = styled.img `
    
    height: 300px;
    position: fixed;
    top: 55%;
    left: 30%;
   
    z-index: 2;
    @media screen and (max-width:992px) {
        height: 300px;
    }
  @media screen and (max-width:768px) {
        display: none;
    }
`

const MotoImg = ({src,fallBackSrc,alt,...props}) => {
    const motoSrc = usePreload({
        src: src,
        fallBackSrc: fallBackSrc
    });
    
    if(!src) return null;
    return <Moto alt={alt} src={motoSrc}/>
}

export default MotoImg