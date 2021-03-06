import React from "react"
import styled from "styled-components"
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
        src: "images/lucky.png",
        fallBackSrc: "images/lucky_opt.png"
    });
    
    return <Moto alt={alt} src={motoSrc}/>
}

export default MotoImg