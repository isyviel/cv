import React, { useState,useEffect } from "react"
import Container from "@bootstrap-styled/v4/lib/Container"
import styled from "styled-components"
import { Slide,Fade } from "@material-ui/core"
import { ABOUTME } from "../common/constantes/home"
import Quote from "../head/Quote"
import Colors from "../common/themes/Colors"
import useMousePosition from "../common/hook/position"
import useWindowSize from "../common/hook/size"
import MotoImg from "../common/img/ImgMoto"
import IratyImg from "../common/img/ImgIraty"
import useIsMounted from "../common/hook/ismounted"

const CustomContainer = styled(Container)`
    position: fixed;
    top: 150px;
    left: 440px;
    font-size: 20px;
    width: 50%;

    @media screen and (max-width:1200px) {
        left: 370px;
        width: 35%;
    }
    
    @media screen and (max-width:992px) {
        left: 170px;
        width: 45%;
    }

    @media screen and (max-width:768px) {
        left: 120px;
        padding:0;
        margin:0;
        font-size: 15px;
        width: 40%;
    }

    @media screen and (max-width:576px) {
        font-size: 15px;
        left: 50px;
        top: 200px;
        width: 80%;
    }
`

const Aboutme = ({isHome,...props}) => {

    const {x, y} = useMousePosition();
    const {h,w}  = useWindowSize();
    const [detectMoto, setDetectMoto] = useState(true);
    const [detect, setDetect] = useState(true);
    const isMounted = useIsMounted();
    //const hasMovedCursor = typeof x === "number" && typeof y === "number";

    useEffect(() => {
        if(isMounted.current){
            detectMouse()
        }
      
    }, [h,w,x,y,isMounted]);

    const minMotoX = w * 31/100
    const maxMotoX = w * 55/100
    const minMotoY = h * 45/100
    const maxMotoY = h * 90/100

    const minIraX = w * 60/100
    const maxIraX = w * 96/100
    const minIraY = h * 60/100
    const maxIraY = h * 96/100

    const detectMouse = () => {
        if((x > minMotoX) && (x < maxMotoX) && (y > minMotoY) && (y < maxMotoY)){
            setDetect(false)
            setDetectMoto(true)
            console.log(detectMoto)
        } else if ((x > minIraX) && (x < maxIraX) && (y > minIraY) && (y < maxIraY)){
            setDetectMoto(false)
            setDetect(true)
        } else if ((x > 520 && x < 630) && (y > 85 && y < 365)) {
            setDetectMoto(false)
            setDetect(false)
        } else {
            setDetectMoto(false)
            setDetect(false)
        } 
    }

    return (
            <CustomContainer>
                {/* <div>EN CONSTRUCTION</div> */}
                {/* <div>{hasMovedCursor
                    ? `Your cursor is at ${x}, ${y}`
                    : "Move your mouse around."}</div>
                <div>values : moto :{minMotoX},{maxMotoX} - iraty: {minIraY}, {maxIraY}</div>
                <div>sizes : h = {h} and w = {w}</div> */}
               
                {/* <div>{detectMoto &&(<MotoImg alt="moto"/>)}</div>
                <div>{detect &&(<IratyImg alt="photo col d'iraty"/>)}</div> */}
                
           </CustomContainer>
    )
}

export default Aboutme